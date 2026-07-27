export const profile = {
  name: "Narbavi Nachiyaar",
  initials: "NN",
  role: "AI & Data Science Engineer",
  headline: ["Building", "AI products", "that solve real-world problems."],
  subtitle:
    "Artificial Intelligence & Data Science Student focused on NLP, Machine Learning, Full Stack Development and Software Engineering.",
  university: "Apollo University",
  degree: "B.Tech — Artificial Intelligence & Data Science",
  cgpa: "9.04",
  email: "narbavi.nachiyaar@gmail.com",
  location: "Chennai, India",
  availability: "Open to internships & AI collaborations",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroCards = [
  { label: "CGPA", value: "8.9", hint: "Apollo University" },
  { label: "AI Projects", value: "6", hint: "Shipped end to end" },
  { label: "Research", value: "1", hint: "Paper co-authored" },
  { label: "Conferences", value: "4", hint: "Tech events attended" },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years studying AI" },
  { value: 6, suffix: "", label: "Projects completed" },
  { value: 5, suffix: "+", label: "Certifications" },
  { value: 4, suffix: "", label: "Conferences attended" },
];

export const bento = {
  whoIAm:
    "I'm an AI & Data Science engineer-in-training who treats coursework like a product roadmap. I take messy real-world signals — clinical notes, journals, noisy text — and turn them into structured, explainable systems people can actually trust.",
  careerGoal:
    "Join an AI-first team where research meets shipping, and grow into an engineer who owns models and the product surface around them.",
  currentFocus: [
    "Transformer-based summarisation",
    "Emotion & intent detection",
    "Production-grade React interfaces",
    "Clean, tested Python services",
  ],
  strengths: ["Leadership", "Teamwork", "Communication", "Critical thinking", "Ownership"],
};

export const skillCategories = [
  {
    title: "Programming",
    items: ["Python", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    title: "AI / ML",
    items: ["NLP", "Machine Learning", "Transformers", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter", "Postman"],
  },
  {
    title: "Business Intelligence",
    items: ["Power BI", "Tableau", "Excel"],
  },
  {
    title: "Cloud",
    items: ["Docker", "Vercel", "Supabase", "Google Colab"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  challenges: string;
  results: string;
  github: string;
  demo: string;
  upcoming?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Medical Summary System",
    tagline: "Clinician-ready summaries from raw patient records",
    problem:
      "Clinicians lose hours reading unstructured patient histories, and critical details get buried in free text.",
    solution:
      "An NLP pipeline that ingests records and voice intake, categorises diagnoses and generates concise, structured summaries with suggested next steps.",
    tech: ["Python", "NLP", "Transformers", "Healthcare AI", "Streamlit"],
    challenges:
      "Handling inconsistent medical vocabulary and keeping the model's output faithful to the source record.",
    results: "Cut review time in test runs by ~60% with structured, source-linked summaries.",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    title: "Mental Health Mood Tracker",
    tagline: "Emotion analytics for personal journaling",
    problem:
      "People journal consistently but rarely see the emotional patterns hiding inside months of entries.",
    solution:
      "A journaling companion that scores emotional tone per entry, visualises mood trends over time and returns personalised wellbeing recommendations.",
    tech: ["Python", "NLP", "Emotion Detection", "React", "Charting"],
    challenges:
      "Detecting nuanced sentiment in short, informal text without over-reacting to single entries.",
    results: "Surfaces weekly mood trajectories and flags sustained downturns early.",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    title: "Next: Agentic Research Assistant",
    tagline: "In design — retrieval-augmented agents for literature review",
    problem: "Literature review is slow, repetitive and hard to keep current.",
    solution:
      "A planned multi-agent system that retrieves, ranks and synthesises papers into cited briefs.",
    tech: ["Python", "RAG", "Vector DB", "LLM Agents"],
    challenges: "Grounding every claim with verifiable citations.",
    results: "Currently in research and prototyping.",
    github: "https://github.com/",
    demo: "https://github.com/",
    upcoming: true,
  },
];

export const timeline = [
  {
    period: "2023 — Present",
    kind: "Education",
    title: "B.Tech, Artificial Intelligence & Data Science",
    place: "Apollo University",
    detail: "CGPA 9.04. Machine learning, NLP, data structures and software engineering.",
  },
  {
    period: "2024",
    kind: "Research",
    title: "Co-authored research paper on applied NLP",
    place: "Apollo University",
    detail: "Explored practical natural language processing for low-resource text.",
  },
  {
    period: "2024",
    kind: "Conference",
    title: "TechXConf 2024 & Apollo Tech Symposium",
    place: "Poster presentation",
    detail: "Presented an AI research poster and attended sessions on emerging AI systems.",
  },
  {
    period: "2024",
    kind: "Internship",
    title: "Cybersecurity Intern",
    place: "GIR Technology",
    detail: "Vulnerability assessment, secure development practices and reporting.",
  },
  {
    period: "2025",
    kind: "Achievement",
    title: "Applied AI project portfolio",
    place: "Independent",
    detail: "Shipped healthcare summarisation and mental wellbeing tooling end to end.",
  },
];

export const certifications = [
  { title: "IoT Workshop", issuer: "Apollo University", detail: "Connected-device prototypes and sensor pipelines." },
  { title: "Robotics Workshop", issuer: "Apollo University", detail: "Autonomous control and embedded programming." },
  { title: "Cybersecurity Program", issuer: "GIR Technology", detail: "Practical security labs and threat analysis." },
  { title: "Machine Learning Foundations", issuer: "Online", detail: "Supervised learning, evaluation and tuning." },
  { title: "NLP Specialisation Track", issuer: "Online", detail: "Embeddings, transformers and text pipelines." },
  { title: "Full Stack Web Development", issuer: "Online", detail: "React, APIs and modern tooling." },
];
