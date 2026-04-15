/**
 * MCP (Model Context Protocol) server endpoint.
 *
 * Implements the JSON-RPC 2.0 based MCP protocol so AI assistants
 * (Claude, Cursor, etc.) can query this portfolio's data as tools.
 *
 * Supported MCP methods:
 *   initialize       — handshake
 *   tools/list       — list available tools
 *   tools/call       — invoke a tool
 *   notifications/initialized — client ready (notification, no response)
 *
 * Tools exposed:
 *   get_projects     — fetch projects (optionally filtered by category)
 *   get_about        — fetch bio, skills, experience, education
 *   search_projects  — full-text search over project titles and descriptions
 */

import { supabase } from '@/lib/supabase';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
};

// ── Tool definitions ──────────────────────────────────────────────────────────

const TOOLS = [
  {
    name: 'get_projects',
    description:
      "Fetch Pushkar Agnihotri's portfolio projects. Returns all projects by default, or filter by category.",
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          enum: ['published_apps', 'personal_projects', 'contract_work'],
          description: 'Optional category filter.',
        },
      },
      additionalProperties: false,
    },
  },
  {
    name: 'get_about',
    description:
      "Fetch Pushkar Agnihotri's full profile: bio, contact info, work experience, education, achievements, and certificates.",
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: 'search_projects',
    description: "Search Pushkar's projects by keyword across titles and descriptions.",
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search term (e.g. "Kotlin", "iOS", "fitness").',
        },
      },
      required: ['query'],
      additionalProperties: false,
    },
  },
];

// ── Tool handlers ─────────────────────────────────────────────────────────────

async function handleGetProjects(args) {
  let query = supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (args?.category) {
    query = query.eq('category', args.category);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return data;
}

async function handleGetAbout() {
  return {
    name: 'Pushkar Agnihotri',
    title: 'Senior Android Engineer / Software Engineer',
    bio: "A dedicated Software Engineer with 4+ years of experience in Android development. Leverages Kotlin to build high-performance, resilient, and beautiful mobile experiences. Currently pursuing a Master's degree in Computer Science at California State University, Fullerton.",
    status: 'Available for new opportunities',
    contact: {
      email: 'agnihotripush@gmail.com',
      linkedin: 'https://www.linkedin.com/in/pushkaragnihotri/',
      github: 'https://github.com/agnihotripushkar',
      linktree: 'https://linktr.ee/push1413',
    },
    education: [
      {
        institution: 'California State University, Fullerton',
        degree: "Master's degree, Computer Science",
        period: 'Aug 2024 - May 2026',
      },
      {
        institution: 'Government College of Engineering',
        degree: 'B.Tech, Computer Science',
        period: 'Aug 2016 - May 2020',
      },
    ],
    experience: [
      {
        title: 'Senior Android Engineer',
        company: 'Carnot Technologies Private Limited',
        period: 'September 2022 - July 2024',
        location: 'Mumbai, Maharashtra, India',
        highlights: [
          'Led a team of 2 developers adopting MVVM architecture — 9% reduction in dev time, 15% code quality improvement.',
          'Converted app to Multi-Module project, achieving over 1 Million downloads on the Google Play Store.',
          'Implemented offline-first functionality using WorkManager.',
          'Developed unified internal SDK for themes and standard UI components.',
        ],
      },
      {
        title: 'Android Engineer',
        company: 'Carnot Technologies Private Limited',
        period: 'January 2021 - August 2022',
        location: 'Mumbai, Maharashtra, India',
        highlights: [
          'Reduced average app startup time by 27% using Baseline Profiles.',
          'Third-party app integration with 90% reduction in development time.',
          'Introduced Gradle Version Catalogs across 11 active modules.',
          'Migrated from Java to Kotlin and from RxJava to coroutines.',
        ],
      },
      {
        title: 'Software Engineer',
        company: 'ElasticRun',
        period: 'June 2020 - January 2021',
        location: 'Pune, Maharashtra, India',
        highlights: [
          'Sanity testing and software deployment for system stability.',
          'Troubleshot and managed support tickets.',
        ],
      },
    ],
    achievements: [
      'Winner of Smart India Hackathon 2019',
      'Runner-Up in Microsoft Hackathon 2.0 in 2018',
    ],
    certificates: [
      'Kotlin Multiplatform Development',
      'AWS Knowledge: Serverless',
      'Gen AI Overview for PMs',
      'Google Cloud Computing Foundations',
      'Introduction to FinOps',
      'Basics of Disciplined Agile',
      'The Basics of Scrum',
    ],
  };
}

async function handleSearchProjects(args) {
  if (!args?.query) throw new Error('Missing required argument: query');

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .or(
      `title.ilike.%${args.query}%,description.ilike.%${args.query}%`
    )
    .order('display_order', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

// ── JSON-RPC helpers ──────────────────────────────────────────────────────────

function jsonRpcResult(id, result) {
  return { jsonrpc: '2.0', id, result };
}

function jsonRpcError(id, code, message) {
  return { jsonrpc: '2.0', id, error: { code, message } };
}

// ── Request handler ───────────────────────────────────────────────────────────

async function handleMessage(message) {
  const { method, params, id } = message;

  // Notifications have no id and need no response
  if (id === undefined) return null;

  switch (method) {
    case 'initialize':
      return jsonRpcResult(id, {
        protocolVersion: '2024-11-05',
        serverInfo: { name: 'pushkar-portfolio', version: '1.0.0' },
        capabilities: { tools: {} },
      });

    case 'tools/list':
      return jsonRpcResult(id, { tools: TOOLS });

    case 'tools/call': {
      const toolName = params?.name;
      const toolArgs = params?.arguments ?? {};

      try {
        let result;
        if (toolName === 'get_projects') result = await handleGetProjects(toolArgs);
        else if (toolName === 'get_about') result = await handleGetAbout();
        else if (toolName === 'search_projects') result = await handleSearchProjects(toolArgs);
        else return jsonRpcError(id, -32601, `Unknown tool: ${toolName}`);

        return jsonRpcResult(id, {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        });
      } catch (err) {
        return jsonRpcResult(id, {
          content: [{ type: 'text', text: `Error: ${err.message}` }],
          isError: true,
        });
      }
    }

    default:
      return jsonRpcError(id, -32601, `Method not found: ${method}`);
  }
}

// ── Route handlers ────────────────────────────────────────────────────────────

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET() {
  // Minimal info endpoint so browsers/crawlers know an MCP server is here
  return Response.json(
    {
      name: 'pushkar-portfolio',
      version: '1.0.0',
      protocol: 'MCP 2024-11-05',
      description: "MCP server for Pushkar Agnihotri's portfolio",
      tools: TOOLS.map((t) => ({ name: t.name, description: t.description })),
      usage: 'POST JSON-RPC 2.0 messages to this endpoint.',
    },
    { headers: CORS_HEADERS }
  );
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      jsonRpcError(null, -32700, 'Parse error: invalid JSON'),
      { status: 400, headers: CORS_HEADERS }
    );
  }

  // Batch requests (array of messages)
  if (Array.isArray(body)) {
    const responses = await Promise.all(
      body.map((msg) => handleMessage(msg))
    );
    const filtered = responses.filter(Boolean);
    return Response.json(filtered, { headers: CORS_HEADERS });
  }

  const response = await handleMessage(body);

  // Notification — no response body
  if (response === null) {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  return Response.json(response, { headers: CORS_HEADERS });
}
