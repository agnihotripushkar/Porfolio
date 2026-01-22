export const publishedApps = [
    {
        id: 'ext-1',
        title: 'System Design Interview Pacer',
        description: 'A Chrome extension to help candidates pace themselves during system design interviews with a floating timer overlay.',
        longDescription: `System Design Interview Pacer is a specialized tool used by candidates to manage their time effectively during high-stakes system design interviews. It provides a non-intrusive floating timer that helps structure the interview into recommended phases.

The extension breaks down a typical 45-minute interview into:
1.  **Requirement Gathering (5 min)**: Clarify scope and goals.
2.  **High-Level Design (10 min)**: Define core components and APIs.
3.  **Deep Dive (25 min)**: Detail specific components, data models, and bottlenecks.
4.  **Wrap Up (5 min)**: Review and summarize.

It runs primarily on whiteboard tools like Excalidraw, Lucidchart, and Miro.`,
        image_url: '', // Placeholder, maybe add one if available or generic code bg
        type: 'Extension',
        link: 'https://chrome.google.com/webstore',
        livelink: 'https://chrome.google.com/webstore',
        techStack: ['JavaScript', 'Chrome Extension API', 'HTML/CSS', 'Shadow DOM'],
        features: [
            'Floating Widget',
            'Phase-based Timer',
            'Draggable Interface',
            'Visual Alerts'
        ]
    }
];
