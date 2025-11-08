module.exports = {
  contacts: {
    name: "Joshua Masanza",
    email: "joshua.masanza@ontariotechu.net",
    github: "https://github.com/joshonline",
    linkedin: "https://www.linkedin.com/in/joshua-masanza-49499a1b3",
    twitter: "https://x.com/psuedothesudo",
  },
  projects: [
    {
      id: "bubble-note",
      title: "Bubble Note",
      description:
        "An experimental Notion-like, note-taking app in progress, focused on simplicity and playful design. More details coming soon.",
      status: "ongoing",
      featured: true,
      links: {
        client: "https://github.com/joshonline/Bubble-Note-Client",
        server: "https://github.com/joshonline/Bubble-Note-Server",
      },
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "accommodation-system",
      title: "Accommodation Management System",
      description:
        "A Python-based accommodation management system with a modern GUI built using CustomTkinter. It supports user authentication, reservations,suite management, and payment tracking, with JSON storage for persistentdata. Designed for modularity and future scalability, the systemdemonstrates practical use of role-based access control and cleanproject structure.",
      status: "completed",
      featured: true,
      links: {
        github: "https://github.com/joshonline/hotel-management-system",
      },
      tags: ["Python", "CustomTkinter", "JSON"],
    },
    {
      id: "Automated Linux Backup",
      title: "Linux Backup Script",
      description:
        "A set of custom Bash scripts for automating backups on both Ubuntu and Fedora systems. The scripts leverage rsync for efficient Home directory synchronization and integrate system-aware handling of different file system structures. This project strengthened my knowledge of Linux internals, file hierarchies, and shell scripting best practices. I continue to refine and expand these scripts for enhanced functionality and reliability.",
      status: "ongoing",
      featured: false,
      links: {},
    },
    {
      id: "express-local-library",
      title: "Local Library Web App",
      description:
        "A Node.js + Express web application built as part of MDN's Learn Web Development course. The project manages a fictional library's book catalog with full CRUD functionality, using MongoDB for storage and Express routing for dynamic content. It served as a practical introduction to server-side rendering, RESTful APIs, and MVC architecture.",
      status: "completed",
      featured: false,
      links: {},
    },
  ],

  site: {
    title: "Joshua Masanza Portfolio",
    description: "Networking & IT enthusiast building secure, reliable systems",
  },
};
