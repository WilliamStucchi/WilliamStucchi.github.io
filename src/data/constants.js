/* ProjectsSection */
export const projects = [
    {
        id: 1,
        title: "Robotics Project 1",
        description: "Mecanum Odometry and Kinematic Control",
        image: "/projects/robotics-project-1.png",
        tags: ["C++", "ROS", "Kinematics", "Control Theory"],
        githubUrl: "#https://github.com/WilliamStucchi/robotics_project_1"
    },
    {
        id: 2,
        title: "IACV Project",
        description: "Image Analysis and Computer Vision",
        image: "/projects/iacv-project.png",
        tags: ["Python", "OpenCV", "Image Processing", "Computer Vision"],
        githubUrl: "#https://github.com/WilliamStucchi/IACV-project"
    },
    {
        id: 3,
        title: "Eryantis",
        description: "Online Board Game",
        image: "/projects/eryantis.png",
        tags: ["Java", "JavaFX", "MVC", "Networking", "Multiplayer"],
        githubUrl: "#https://github.com/WilliamStucchi/ing-sw-2022-veronese-silvestrini-stucchi"
    },
    {
        id: 4,
        title: "Artificial Neural Networks and Deep Learning",
        description: "Neural Networks Challenge",
        image: "/projects/anndl-project.png",
        tags: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
        githubUrl: "#https://github.com/WilliamStucchi/Artificial-Neural-Networks-and-Deep-Learning"
    },
    {
        id: 5,
        title: "Advanced Vehicle State Estimation",
        description: "Neural Networks Vehicle State Estimation",
        image: "/projects/msc-thesis.png",
        tags: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
        githubUrl: "#https://github.com/WilliamStucchi/MSc_ASCARI"
    },
    {
        id: 6,
        title: "Sensors Fusion & STM32",
        description: "Exploit Sensor Fusion and Embedded PCs",
        image: "/projects/sensors-systems.png",
        tags: ["C", "STM32", "I2C", "SPI", "UART", "DMA", "LCD", "IR"],
        githubUrl: "#https://github.com/WilliamStucchi/Sensor-Systems"
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