export const publishedApps = [
    {
        id: 'app-1',
        title: 'GoalFocus: Pomodoro & Habits',
        description: 'GoalFocus is your all-in-one productivity companion designed to help you stay focused, hydrated, and disciplined. Whether you are studying, working, or building new habits, GoalFocus provides the tools you need to succeed in a beautifully designed, distraction-free environment.',
        longDescription: `GoalFocus is your all-in-one productivity companion designed to help you stay focused, hydrated, and disciplined. Whether you are studying, working, or building new habits, GoalFocus provides the tools you need to succeed in a beautifully designed, distraction-free environment.

Features include:
- **Pomodoro Timer**: Customizable timer with work/break intervals to maximize productivity.
- **Habit Tracker**: Build and track daily habits with streaks and progress insights.
- **Water Tracker**: Stay hydrated with daily goals and reminders.
- **Task Management**: Simple and effective to-do list to organize your day.
- **Detailed Statistics**: Visualize your productivity patterns and improvements over time.
- **Customizable Themes**: Choose from various themes including Dark Mode to suit your style.`,
        image_url: 'https://play-lh.googleusercontent.com/ySapFMCp34Hg5huOBRkpkf1bIBxhn6V3NnrW1SeJn06zOc4Af25tcewDjV0xjk2t1cK-3OnaTM2y-VCKCwEYCA=w480-h960-rw',
        type: 'App',
        link: 'https://play.google.com/store/apps/details?id=me.pushkaragnihotri.goalfocus',
        livelink: 'https://play.google.com/store/apps/details?id=me.pushkaragnihotri.goalfocus',
        techStack: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Coroutines', 'Hilt Dependency Injection'],
        features: [
            'Pomodoro Timer',
            'Habit Tracker',
            'Water Intake Reminder',
            'Task Manager',
            'Analytics Dashboard'
        ]
    },
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
