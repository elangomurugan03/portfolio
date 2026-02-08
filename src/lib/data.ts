// Hero Section Typewriter Texts
export const typewriterTexts = [
  "Hi, I'm Elango",
  "Hola, soy Elango",
  "Bonjour, je suis Elango",
  "Hallo, ich bin Elango",
  "Ciao, sono Elango",
  "Olá, eu sou Elango",
  "Привет, я Эланго",
  "こんにちは、エランゴです",
  "你好，我是伊蘭戈",
  "مرحبا، أنا إيلانغو",
  "안녕하세요, 저는 엘랑고입니다",
  "Γεια, είμαι ο Ελάνγκο",
  "ہیلو، میں ایلانگو ہوں",
];

// Navigation Links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

// Social Links
export const socialLinks = {
  github: "https://github.com/Elango-spidy",
  linkedin: "https://www.linkedin.com/in/elango-m-9b4b76310/",
  email: "muruganelango2003@gmail.com",
  phone: "+919003824868",
  cvDownload: "/Elango-Murugan-CV.pdf",
};

// Projects Data
export const projects = [
  {
    id: 1,
    title: "Real-Time Accident Detection System",
    description:
      "A deep learning-based computer vision system that detects road accidents from video frames using motion analysis and CNN models.",
    image: "/accident-detection.png",
    techStack: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Computer Vision",
  },
  {
    id: 2,
    title: "GenAI Knowledge Assistant",
    description:
      "An intelligent assistant using LLMs and embeddings to transform unstructured documents into searchable knowledge systems.",
    image: "/genai-assistant.png",
    techStack: ["Python", "LLM APIs", "Vector DB", "NLP"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Generative AI",
  },
  {
    id: 3,
    title: "ML Feature Engineering Pipeline",
    description:
      "Reusable data processing workflows that transform raw datasets into model-ready inputs using scalable techniques.",
    image: "/feature-pipeline.png",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    liveUrl: "#",
    githubUrl: "#",
    category: "ML Engineering",
  },
  {
    id: 4,
    title: "ML Model Inference API",
    description:
      "A lightweight API service that deploys trained ML models for real-time predictions with structured inference pipelines.",
    image: "/inference-api.png",
    techStack: ["Python", "FastAPI", "Docker", "REST"],
    liveUrl: "#",
    githubUrl: "#",
    category: "MLOps",
  },
  {
    id: 5,
    title: "NLP Text Classification System",
    description:
      "A natural language processing model that classifies text using feature extraction, vectorization, and supervised ML.",
    image: "/nlp-classifier.png",
    techStack: ["Python", "Scikit-learn", "NLP", "NLTK"],
    liveUrl: "#",
    githubUrl: "#",
    category: "NLP",
  },
  {
    id: 6,
    title: "Deep Learning Image Classifier",
    description:
      "A CNN-based image classification model trained with augmentation and architecture tuning for multi-class recognition.",
    image: "/image-classifier.png",
    techStack: ["Python", "TensorFlow", "Keras", "CNN"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Deep Learning",
  },
];

// Experience Data
export const experiences = [
  {
    id: 1,
    title: "AI & Cloud Solutions Architect",
    company: "Nexium",
    location: "Remote",
    period: "2024 - Present",
    type: "Full-time",
    description:
      "Leading AI integration and cloud architecture initiatives, designing scalable solutions for enterprise clients.",
    achievements: [
      "Architected microservices infrastructure reducing deployment time by 60%",
      "Led team of 8 engineers in implementing AI-powered analytics platform",
      "Reduced cloud costs by 40% through optimization strategies",
    ],
    technologies: ["AWS", "Azure", "Kubernetes", "TensorFlow", "Python"],
  },
  {
    id: 2,
    title: "MEAN Stack Developer",
    company: "10Pearls",
    location: "Lahore, Pakistan",
    period: "2023 - 2024",
    type: "Full-time",
    description:
      "Developed full-stack web applications using the MEAN stack for international clients.",
    achievements: [
      "Built real-time collaboration features serving 50K+ daily active users",
      "Implemented CI/CD pipelines reducing release cycles by 70%",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["MongoDB", "Express.js", "Angular", "Node.js", "Socket.io"],
  },
  {
    id: 3,
    title: "Junior Software Developer",
    company: "Techlogix",
    location: "Lahore, Pakistan",
    period: "2022 - 2023",
    type: "Full-time",
    description:
      "Contributed to enterprise software solutions and internal tooling development.",
    achievements: [
      "Developed automated testing suite covering 85% of codebase",
      "Created internal dashboard reducing manual reporting by 90%",
      "Participated in agile ceremonies and sprint planning",
    ],
    technologies: ["React", "Java", "Spring Boot", "MySQL", "Docker"],
  },
  {
    id: 4,
    title: "Unity Game Developer",
    company: "Mindstorm Studios",
    location: "Lahore, Pakistan",
    period: "2021 - 2022",
    type: "Full-time",
    description:
      "Developed mobile games and interactive experiences using Unity engine.",
    achievements: [
      "Shipped 3 mobile games with 1M+ combined downloads",
      "Optimized game performance achieving 60 FPS on mid-range devices",
      "Implemented monetization systems increasing revenue by 25%",
    ],
    technologies: ["Unity", "C#", "Blender", "Firebase", "Photon"],
  },
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: "James Peterson",
    role: "CEO",
    company: "Blue Horizon Solutions",
    image: "/testimonials/james.jpg",
    content:
      "Ali's technical expertise and dedication transformed our digital presence. His ability to understand complex requirements and deliver elegant solutions is remarkable.",
  },
  {
    id: 2,
    name: "David Wilson",
    role: "Head of Development",
    company: "Quantum Leap Ventures",
    image: "/testimonials/david.jpg",
    content:
      "Working with Ali was a game-changer for our startup. He not only delivered exceptional code but also provided valuable insights that improved our product strategy.",
  },
  {
    id: 3,
    name: "John Davis",
    role: "Founder",
    company: "Bright Future Media",
    image: "/testimonials/john.jpg",
    content:
      "Ali's attention to detail and commitment to quality exceeded our expectations. He delivered our project ahead of schedule with zero compromises on quality.",
  },
  {
    id: 4,
    name: "Robert King",
    role: "CTO",
    company: "Apex Technologies",
    image: "/testimonials/robert.jpg",
    content:
      "Exceptional problem-solver with deep technical knowledge. Ali's contributions were instrumental in scaling our platform to handle 10x the traffic.",
  },
];

// Companies Launched
export const companiesLaunched = [
  { name: "Mindsmith", logo: "/companies/mindsmith.svg" },
  { name: "Humata", logo: "/companies/humata.svg" },
  { name: "Klu", logo: "/companies/klu.svg" },
  { name: "Recast", logo: "/companies/recast.svg" },
  { name: "Durable", logo: "/companies/durable.svg" },
];

// Tech Stack with Icons
export const techStack = [
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "React", icon: "SiReact" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "Python", icon: "SiPython" },
  { name: "TailwindCSS", icon: "SiTailwindcss" },
  { name: "MongoDB", icon: "SiMongodb" },
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "AWS", icon: "SiAmazonaws" },
  { name: "Docker", icon: "SiDocker" },
  { name: "Kubernetes", icon: "SiKubernetes" },
  { name: "Git", icon: "SiGit" },
  { name: "Figma", icon: "SiFigma" },
  { name: "VS Code", icon: "SiVisualstudiocode" },
  { name: "Unity", icon: "SiUnity" },
];

// About Page Stats
export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Awards Won", value: "5" },
];

// Services
export const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, performant web applications with modern frameworks and best practices.",
    icon: "Code",
  },
  {
    title: "AI Integration",
    description:
      "Implementing cutting-edge AI solutions to automate processes and enhance user experiences.",
    icon: "Brain",
  },
  {
    title: "Cloud Architecture",
    description:
      "Designing scalable, cost-effective cloud infrastructure on AWS, Azure, and GCP.",
    icon: "Cloud",
  },
  {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications with native-like performance.",
    icon: "Smartphone",
  },
];
