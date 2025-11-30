
const { createClient } = require('@supabase/supabase-js');
const https = require('https');
const crypto = require('crypto');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const repos = [
    {
        "name": "agnihotripushkar.github.io",
        "url": "https://github.com/agnihotripushkar/agnihotripushkar.github.io",
        "description": "Portfolio Website"
    },
    {
        "name": "leetcode-kt",
        "url": "https://github.com/agnihotripushkar/leetcode-kt",
        "description": "leetcode questions solved in kotlin"
    },
    {
        "name": "MortyApp",
        "url": "https://github.com/agnihotripushkar/MortyApp",
        "description": "Multi-module Jetpack Compose App with MVVM architecture, ktor as http api client"
    },
    {
        "name": "GameKMP",
        "url": "https://github.com/agnihotripushkar/GameKMP",
        "description": "Kotlin-Multiplatform with compose- multiplatform"
    },
    {
        "name": "AnimeApp",
        "url": "https://github.com/agnihotripushkar/AnimeApp",
        "description": "Jetpack Compose App with MVVM architecture. Lib used - Koin, Ktor, Paging 3, Coil, DataStore, compose-navigation, SplashScreen"
    },
    {
        "name": "agnihotripushkar",
        "url": "https://github.com/agnihotripushkar/agnihotripushkar",
        "description": ""
    },
    {
        "name": "METoken",
        "url": "https://github.com/agnihotripushkar/METoken",
        "description": ""
    },
    {
        "name": "spring-boot-basic-kotlin",
        "url": "https://github.com/agnihotripushkar/spring-boot-basic-kotlin",
        "description": ""
    },
    {
        "name": "leetcode-py",
        "url": "https://github.com/agnihotripushkar/leetcode-py",
        "description": "DS and Algo Leetcode submission mainly in python"
    },
    {
        "name": "MERN-HomeRentalApp",
        "url": "https://github.com/agnihotripushkar/MERN-HomeRentalApp",
        "description": "MERN stack website"
    },
    {
        "name": "aoc-py",
        "url": "https://github.com/agnihotripushkar/aoc-py",
        "description": "python solutions"
    },
    {
        "name": "titan-parts-market",
        "url": "https://github.com/agnihotripushkar/titan-parts-market",
        "description": ""
    },
    {
        "name": "AdventOfCode2024",
        "url": "https://github.com/agnihotripushkar/AdventOfCode2024",
        "description": "Advent of Code solutions in Java"
    },
    {
        "name": "React-LyricsFinder-Musicmatch",
        "url": "https://github.com/agnihotripushkar/React-LyricsFinder-Musicmatch",
        "description": "react-roter & react context"
    },
    {
        "name": "Sakar",
        "url": "https://github.com/agnihotripushkar/Sakar",
        "description": "The Government Scheme provider App"
    },
    {
        "name": "moviesearch",
        "url": "https://github.com/agnihotripushkar/moviesearch",
        "description": ""
    },
    {
        "name": "geca-ppt",
        "url": "https://github.com/agnihotripushkar/geca-ppt",
        "description": "WebSlide.js"
    },
    {
        "name": "ScholarshipPortal",
        "url": "https://github.com/agnihotripushkar/ScholarshipPortal",
        "description": ""
    }
];

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(data);
                } else {
                    resolve(null);
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function getReadme(repoName) {
    const branches = ['main', 'master'];
    for (const branch of branches) {
        const url = `https://raw.githubusercontent.com/agnihotripushkar/${repoName}/${branch}/README.md`;
        try {
            const content = await fetchUrl(url);
            if (content) return content;
        } catch (e) {
            console.error(`Error fetching ${url}:`, e.message);
        }
    }
    return null;
}

function determineType(repo) {
    const name = repo.name.toLowerCase();
    const desc = repo.description.toLowerCase();

    if (name.includes('app') || desc.includes('app') || desc.includes('android') || desc.includes('ios')) {
        if (desc.includes('web') || desc.includes('website') || desc.includes('react') || desc.includes('mern')) {
            return 'Web App';
        }
        return 'App';
    }
    if (desc.includes('web') || desc.includes('website') || name.includes('.io')) {
        return 'Web App';
    }
    return 'Github';
}

async function populate() {
    console.log('Starting population...');

    for (const repo of repos) {
        console.log(`Processing ${repo.name}...`);
        const readme = await getReadme(repo.name);
        const type = determineType(repo);

        const projectData = {
            id: crypto.randomUUID(),
            title: repo.name,
            description: repo.description || 'No description provided.',
            link: repo.url,
            type: type,
            details: readme || repo.description || 'No details available.'
        };

        // Upsert based on title or link? Assuming title is unique enough or we just insert.
        // But better to check if exists or use upsert if we have a unique constraint.
        // Since I don't know the unique constraint, I'll just insert.
        // But wait, if I run this multiple times, I'll get duplicates.
        // I'll try to select first to see if it exists.

        const { data: existing } = await supabase
            .from('projects')
            .select('id')
            .eq('title', repo.name)
            .single();

        if (existing) {
            console.log(`Project ${repo.name} already exists. Updating...`);
            const { error } = await supabase
                .from('projects')
                .update(projectData)
                .eq('id', existing.id);

            if (error) console.error(`Error updating ${repo.name}:`, error.message);
            else console.log(`Updated ${repo.name}`);
        } else {
            console.log(`Inserting ${repo.name}...`);
            const { error } = await supabase
                .from('projects')
                .insert([projectData]);

            if (error) console.error(`Error inserting ${repo.name}:`, error.message);
            else console.log(`Inserted ${repo.name}`);
        }
    }
    console.log('Done!');
}

populate();
