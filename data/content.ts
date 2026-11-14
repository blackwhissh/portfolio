// Edit this file when something changes.
// linkedin: full url, or leave "" so the link stays hidden.
// cvUrl: "/cv.pdf" after you put the file in public/. Leave "" and the button asks by email.
// repo and demo can stay "" — those links just won't show.

export const profile = {
  name: "Nikoloz Kiladze",
  role: "Software Engineer",
  focus: "Backend & AI",
  location: "Germany",
  schoolLine: "M.Sc. Computer Science, University of Siegen",
  email: "blackwhissh@gmail.com",
  github: "https://github.com/blackwhissh",
  linkedin: "",
  cvUrl: "",
};

export const hero = {
  line: "Building intelligent systems. Engineering meaningful products.",
  intro:
    "I'm Nikoloz, a Software Engineer specializing in backend architecture, scalable applications, and AI-powered systems. I enjoy solving complex problems and turning ideas into practical, reliable software.",
};

export const about = {
  lead: "I'm a Software Engineer with over 3 years of professional software development experience. My primary focus is backend engineering, system architecture, and building production-ready applications.",
  rest: "Throughout my career, I've worked with Java, Spring Boot, PostgreSQL, Redis, Kafka, Docker, Kubernetes, and modern frontend technologies. I'm also passionate about Generative AI, exploring Large Language Models, AI agents, MCP, and intelligent applications. Currently, I'm pursuing my Master's degree in Computer Science at the University of Siegen, Germany, while continuing to explore new technologies and build meaningful products.",
};

export type SkillUse = "work" | "elsewhere";

export const skillLegend = {
  work: "On the job",
  elsewhere: "Projects and study",
};

export const skillGroups: { title: string; items: { name: string; use: SkillUse }[] }[] = [
  {
    title: "Backend",
    items: [
      { name: "Java", use: "work" },
      { name: "Spring Boot", use: "work" },
      { name: "Spring Security", use: "work" },
      { name: "REST APIs", use: "work" },
      { name: "System architecture", use: "work" },
      { name: "PostgreSQL", use: "work" },
      { name: "Redis", use: "work" },
      { name: "Apache Kafka", use: "work" },
      { name: "Microservices", use: "elsewhere" },
    ],
  },
  {
    title: "AI",
    items: [
      { name: "Generative AI", use: "elsewhere" },
      { name: "Large language models", use: "elsewhere" },
      { name: "Google Gemini API", use: "elsewhere" },
      { name: "OpenAI API", use: "elsewhere" },
      { name: "Prompt engineering", use: "elsewhere" },
      { name: "AI agents", use: "elsewhere" },
      { name: "Model Context Protocol", use: "elsewhere" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Docker", use: "work" },
      { name: "Kubernetes", use: "work" },
      { name: "Linux", use: "work" },
      { name: "Monitoring", use: "work" },
      { name: "CI/CD", use: "elsewhere" },
      { name: "Grafana", use: "elsewhere" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", use: "work" },
      { name: "React", use: "work" },
      { name: "Tailwind CSS", use: "work" },
      { name: "HTML", use: "work" },
      { name: "CSS", use: "work" },
      { name: "Flutter", use: "work" },
      { name: "TypeScript", use: "elsewhere" },
    ],
  },
];

export type Project = {
  title: string;
  year: string;
  summary: string;
  stack: string[];
  parts: { name: string; note: string }[];
  repo: string;
  demo: string;
};

export const projects: Project[] = [
  {
    title: "CST",
    year: "2024",
    summary:
      "Workforce platform for Cloud Streaming Technology. Schedules, shift swaps, gift hours, and vacations, used by about 500 employees. The website is private, so I show it myself.",
    stack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker", "JavaScript", "Flutter"],
    parts: [
      { name: "Web UI", note: "The day-to-day tools for schedules and requests." },
      { name: "Spring Boot API", note: "Business rules and JWT auth, shared with the phone app." },
      { name: "PostgreSQL", note: "Employees, shifts, swaps, and time off." },
      { name: "Flutter", note: "Same API, on a phone." },
      { name: "Docker", note: "How the backend is packaged to run." },
    ],
    repo: "",
    demo: "",
  },
  {
    title: "Uni Companion",
    year: "2026",
    summary:
      "Campus study platform aimed at the University of Siegen. Lecturers publish course files. Students enroll and work through quizzes and cards, with Gemini in the study flow.",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Gemini"],
    parts: [
      { name: "React", note: "The student and lecturer interface." },
      { name: "Spring Boot", note: "Accounts, courses, and the study API." },
      { name: "PostgreSQL", note: "Course data and progress." },
      { name: "Gemini", note: "Help on top of the published course material." },
    ],
    repo: "https://github.com/blackwhissh/uni-companion",
    demo: "",
  },

  // copy a block above this line when you want another project on the page
  // {
  //   title: "something new",
  //   year: "2026",
  //   summary: "what it is, in a few sentences. leave out numbers you can't stand behind.",
  //   stack: ["Java", "Spring Boot"],
  //   parts: [{ name: "API", note: "what this piece does." }],
  //   repo: "",
  //   demo: "",
  // },
];

export const experience: { role: string; org: string; place: string; points: string[] }[] = [
  {
    role: "Lead Backend Developer / System Architect",
    org: "CST / CSTGEO",
    place: "",
    points: [
      "Backend architecture for the workforce platform.",
      "Java, Spring Boot, PostgreSQL, and JWT.",
      "Docker, monitoring, and keeping the API in production.",
    ],
  },
  {
    role: "Software Developer",
    org: "angels.ge",
    place: "",
    points: [
      "Java and Spring Boot, with Kafka, Redis, and PostgreSQL.",
      "React and Tailwind on the interface.",
      "Docker and Kubernetes around the deploy.",
    ],
  },
  {
    role: "Computer Science Teacher",
    org: "Newton Free School",
    place: "Tbilisi",
    points: [
      "IB MYP5 and DP1 computer science.",
      "Programming classes, mentoring, and academic supervision.",
    ],
  },
];

export const education: { school: string; place: string; program: string; detail: string }[] = [
  {
    school: "University of Siegen",
    place: "Germany",
    program: "M.Sc. Computer Science",
    detail: "Complex and Intelligent Software Systems. In progress.",
  },
  {
    school: "International Black Sea University",
    place: "Georgia",
    program: "B.Sc. Computer Science",
    detail: "Graduated with honours.",
  },
];

export const beyond =
  "I follow software architecture and new tooling, and I like starting products of my own. Guitar and music production when the code can wait.";

export const contactCopy = {
  title: "Have an interesting problem to solve?",
  text: "I'm always interested in connecting with engineers, founders, and people building meaningful products. Whether it's an interesting opportunity, a technical discussion, or a potential collaboration, feel free to reach out.",
};
