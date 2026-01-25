/* ProjectsSection */
export const projects = [
    {
        id: 1,
        title: "Project1",
        description: "Description of Project1",
        image: "/projects/project1.png",
        tags: ["tag1", "tag2", "tag3"],
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Project2",
        description: "Description of Project2",
        image: "/projects/project2.png",
        tags: ["tag1", "tag2", "tag3"],
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Project3",
        description: "Description of Project3",
        image: "/projects/project3.png",
        tags: ["tag1", "tag2", "tag3"],
        githubUrl: "#"
    },
];

/* SkillsSection */
export const skills = [
    // Software Development
    { name: "C/C++", level: 5, category: "SW Dev" },
    { name: "Python", level: 5, category: "SW Dev" },
    { name: "ROS2 / Middleware", level: 4, category: "SW Dev" },
    { name: "Bash Scripting", level: 4, category: "SW Dev" },

    // AI & Machine Learning
    { name: "TensorFlow", level: 4, category: "AI" },
    { name: "Object Detection", level: 5, category: "AI" },
    { name: "Semantic Segmentation", level: 4, category: "AI" },
    { name: "Model Optimization (TensorRT)", level: 3, category: "AI" },
    { name: "Sensor Fusion", level: 4, category: "AI" },

    // Computer Vision & Perception
    { name: "OpenCV", level: 4, category: "Vision" },
    { name: "Image Processing", level: 4, category: "Vision" },
    { name: "OpenGL", level: 3, category: "Vision" },
    { name: "GStreamer", level: 4, category: "Vision" },
    { name: "Camera Calibration", level: 4, category: "Vision" },

    // Professional Tools
    { name: "Git / Version Control", level: 5, category: "Tools" },
    { name: "Linux / Embedded Systems", level: 5, category: "Tools" },
    { name: "NVIDIA Jetson / Edge AI", level: 5, category: "Tools" },
    { name: "Docker & Containerization", level: 4, category: "Tools" },
    { name: "CI/CD Pipelines", level: 3, category: "Tools" },

    // Specialized Domains
    { name: "CAN bus / J1939", level: 4, category: "Others" },
    { name: "HiL Simulation", level: 4, category: "Others" },
    { name: "Full-Stack HMI", level: 4, category: "Others" },
    { name: "Vehicle Dynamics Modeling", level: 4, category: "Others" }
];


export const proficiencyLevels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
    "Master"
]

export const categories = ["All", "SW Dev", "AI", "Vision", "Tools", "Others"];