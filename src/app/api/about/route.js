const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

const ABOUT = {
  name: 'Pushkar Agnihotri',
  title: 'Senior Android Engineer / Software Engineer',
  bio: 'A dedicated Software Engineer with 4+ years of experience in Android development. Leverages Kotlin to build high-performance, resilient, and beautiful mobile experiences. Currently pursuing a Master\'s degree in Computer Science at California State University, Fullerton.',
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
        'Implemented offline-first functionality using WorkManager for seamless low-connectivity operation.',
        'Developed unified internal SDK for themes and standard UI components across company apps.',
      ],
    },
    {
      title: 'Android Engineer',
      company: 'Carnot Technologies Private Limited',
      period: 'January 2021 - August 2022',
      location: 'Mumbai, Maharashtra, India',
      highlights: [
        'Used Baseline Profiles to reduce average app startup time by 27%.',
        'Integrated a third-party application with 90% reduction in development time.',
        'Introduced Gradle Version Catalogs across 11 active modules.',
        'Migrated project from Java to Kotlin and from RxJava to Kotlin coroutines.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'ElasticRun',
      period: 'June 2020 - January 2021',
      location: 'Pune, Maharashtra, India',
      highlights: [
        'Conducted sanity testing and software deployment for system stability.',
        'Troubleshot and managed support tickets with strong problem-solving focus.',
      ],
    },
  ],
  achievements: [
    'Winner of Smart India Hackathon 2019',
    'Runner-Up in Microsoft Hackathon 2.0 in 2018',
  ],
  certificates: [
    { name: 'Kotlin Multiplatform Development', issuer: 'LinkedIn Learning' },
    { name: 'AWS Knowledge: Serverless', issuer: 'AWS / Credly' },
    { name: 'Gen AI Overview for PMs', issuer: 'Credly' },
    { name: 'Google Cloud Computing Foundations', issuer: 'Google / Credly' },
    { name: 'Introduction to FinOps', issuer: 'FinOps Foundation' },
    { name: 'Basics of Disciplined Agile', issuer: 'PMI' },
    { name: 'The Basics of Scrum', issuer: 'PMI' },
  ],
};

export async function GET() {
  return Response.json(ABOUT, { headers: CORS_HEADERS });
}
