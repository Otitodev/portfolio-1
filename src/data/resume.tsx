import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Otito Ogene",
  initials: "OO",
  url: "https://github.com/otitodev", // Update with your portfolio website if you have one
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/lagos",
  description:
    "Backend Engineer | Python Developer. Building scalable systems with FastAPI, Django, and AWS.",
  summary:
    "Backend Engineer skilled in building and maintaining scalable systems using Python, FastAPI, and Django. Experienced in API/System design, database management, and cloud deployment on AWS. Strong communicator with problem-solving, teamwork, and attention-to-detail skills. Passionate about using data and backend automation to improve connectivity and user experience.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "FastAPI",
    "Django",
    "Flask",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "REST APIs",
    "ETL",
    "Apache Spark",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "otitodrichukwu@gmail.com",
    tel: "+90366755978",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/otitodev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/otito-ogene",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Paynell1", // Update with your actual X/Twitter handle
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:otitodrichukwu@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Phorion AI",
      href: "https://master.d2l6mgg31pl5nf.amplifyapp.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer (Backend)",
      logoUrl: "/vibesync.png",
      start: "oct 2025",
      end: "present",
      description:
        "Engineered resilent backend systems for AI native systems",
    },
    
    {
      company: "Hammer Games",
      href: "https://hammergames.com",
      badges: [],
      location: "Enugu, Nigeria",
      title: "Software Engineer Intern",
      logoUrl: "/hammer-games.png",
      start: "Mar 2024",
      end: "Oct 2024",
      description:
        "Built RESTful APIs in FastAPI/Django for authentication, in-game events, and analytics. Implemented Redis caching and async programming, reducing response time by 35%. Optimized backend systems handling 50K+ daily active users with robust testing practices.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/freelance.png",
      start: "Nov 2023",
      end: "Present",
      description:
        "Delivered backend and full-stack solutions using Python (Django, FastAPI, Flask) and React. Integrated Mistral AI API for automation and analytics, reducing admin workload by 30%. Managed PostgreSQL, MySQL, MongoDB, and Redis databases with Docker deployments on AWS. Implemented CI/CD pipelines and maintained high code quality through unit and integration testing.",
    },
  ],
  education: [
    {
      school: "University of Nigeria, Enugu",
      href: "https://unn.edu.ng",
      degree: "Bachelor of Medical Laboratory Science (B.MLS)",
      logoUrl: "/unn.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Triage AI",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed a full-stack offline-first health-tech app with FastAPI, Supabase, and React Native to provide AI-driven triage in rural Nigeria. Improved response time by 50% and introduced local data handling mechanisms for low-connectivity areas.",
      technologies: [
        "FastAPI",
        "React Native",
        "Supabase",
        "Python",
        "AI/ML",
        "Offline-First",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/otitodev/triage-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AutoLab",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built a Python ETL pipeline using Flask and PostgreSQL applying scikit-learn anomaly detection, boosting lab data accuracy by 25% and streamlining report processing. Optimized data throughput and backend performance for large-scale data operations.",
      technologies: [
        "Python",
        "Flask",
        "PostgreSQL",
        "scikit-learn",
        "ETL",
        "Pandas",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/otitodev/autolab",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI Partner Catalyst: Accelerate Innovation",
      dates: "34 days to submit",
      location: "Online",
      description: "Accelerating innovation through the Google Cloud partner ecosystem. $75,000 in prizes. 1605 participants.",
      image: "",
      links: [],
    },
    {
      title: "FIBO Hackathon",
      dates: "18 days to submit",
      location: "Online",
      description: "Build the Future of Creative Control with Scale. $30,000 in prizes. 858 participants.",
      image: "",
      links: [],
    },
    {
      title: "Kiroween",
      dates: "8 days to submit",
      location: "Online",
      description: "Build something wicked for Kiroween, our annual Halloween-themed hackathon where developers dare to code in dark mode. $100,000 in prizes. 3492 participants.",
      image: "",
      links: [],
    },
    {
      title: "Cloud Run Hackathon",
      dates: "Winners TBD",
      location: "Online",
      description: "Build applications with Cloud Run. $50,000 in prizes. 3469 participants.",
      image: "",
      links: [],
    },
    {
      title: "Google Chrome Built-in AI Challenge 2025",
      dates: "Winners TBD",
      location: "Online",
      description: "Innovate with Intelligence: Build the Future of the Web with Gemini Nano and Chrome AI. $70,000 in prizes. 14181 participants.",
      image: "",
      links: [],
    },
    {
      title: "Reddit and Kiro: Community Games Challenge",
      dates: "Winners announced",
      location: "Online",
      description: "Reddit and Kiro are hosting a virtual hackathon for the best community game! $45,000 in prizes. 1944 participants.",
      image: "",
      links: [],
    },
    {
      title: "AWS AI Agent Global Hackathon",
      dates: "Winners TBD",
      location: "Online",
      description: "Agents of change - building tomorrows AI solution today. $45,000 in prizes. 9530 participants.",
      image: "",
      links: [],
    },
    {
      title: "Baseline Tooling Hackathon",
      dates: "Winners announced",
      location: "Online",
      description: "Accelerate availability of modern web features. $10,000 in prizes. 2951 participants.",
      image: "",
      links: [],
    },
    {
      title: "TiDB AgentX Hackathon 2025",
      dates: "Winners announced",
      location: "Online",
      description: "Forge Agentic AI for Real-World Impact. $30,500 in prizes. 2683 participants.",
      image: "",
      links: [],
    },
    {
      title: "Code with Kiro Hackathon",
      dates: "Winners announced",
      location: "Online",
      description: "A challenge for developers to explore Kiro, an AI IDE that works alongside you to turn ideas into production code with spec-driven development. $100,000 in prizes. 10001 participants.",
      image: "",
      links: [],
    },
    {
      title: "SpaceHack 2025: Space Data Challenge",
      dates: "Winners announced",
      location: "Online",
      description: "Shaping the Future of Space Exploration through Data, AI, and Connectivity. $500 in prizes. 433 participants.",
      image: "",
      links: [],
    },
  ],
} as const;
