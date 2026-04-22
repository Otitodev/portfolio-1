import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Otito Ogene",
  initials: "OO",
  url: "https://github.com/otitodev", // Update with your portfolio website if you have one
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/lagos",
  description:
    "I build AI agents that ship — not demos. Python backend engineer specialising in production LLM systems, voice AI, and multi-tenant automation platforms.",
  summary:
    "Python backend engineer with 3+ years of production experience building AI agents, voice AI systems, and scalable automation platforms. I work across the full stack — FastAPI backends, LangGraph agent orchestration, Claude and OpenAI API integration, VAPI voice pipelines, and n8n workflow automation — shipping systems that handle real-world operations autonomously with measurable business impact.\n\nMy production proof points include a HIPAA-compliant voice AI receptionist with a 94% autonomous booking rate, a live emergency triage agent handling 100% of inbound service calls, and a multi-tenant WhatsApp AI SaaS serving paying customers. I have participated in 11+ hackathons, hold a BSc in Medical Laboratory Science, and bring domain depth in healthcare AI alongside my engineering work. I thrive in fast-moving environments where engineering decisions directly shape the product.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "FastAPI",
    "Django",
    "Next.js",
    "AI Agents",
    "Vapi",
    "Voice AI",
    "n8n Automation",
    "Workflow Automation",
    "LLM Integration",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "REST APIs",
    "CRM Integration",
    "HIPAA Compliance",
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
      title: "Whaply - Multi-Tenant WhatsApp AI SaaS",
      href: "https://whaply.site",
      dates: "2024 - Present",
      active: true,
      description:
        "Production multi-tenant WhatsApp AI platform where each tenant gets a fully configurable AI agent handling inbound messages autonomously. Features LLM-powered intent classification, conversation routing, human-AI collision detection, and per-tenant agent configuration. Built with FastAPI, LangGraph for agent orchestration, Supabase/PostgreSQL for persistence, and Evolution API for WhatsApp integration — deployed on Railway with GitHub Actions CI/CD. Reduced per-conversation LLM cost by ~40% through Redis-backed intent caching and token budget enforcement.",
      technologies: [
        "FastAPI",
        "LangGraph",
        "Claude API",
        "Evolution API",
        "Supabase",
        "PostgreSQL",
        "Redis",
        "Railway",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://whaply.site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/whaply.gif",
      video: "",
    },
    {
      title: "AddPost - AI-Powered Social Media Scheduler",
      href: "https://addpost.site",
      dates: "2025",
      active: true,
      description:
        "Professional social media scheduling platform with AI-powered content generation for X (Twitter) and LinkedIn. Features AI caption generation, smart scheduling with timezone support, thread & carousel creation, PWA capabilities for offline use, secure authentication, and automated post execution with retry logic. Built with mobile-first approach and dark professional UI.",
      technologies: [
        "Next.js",
        "FastAPI",
        "TypeScript",
        "Supabase",
        "ShadCN/UI",
        "PWA",
        "AI Content Generation",
      ],
      links: [
        {
          type: "Website",
          href: "https://addpost.site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/addpost.gif",
      video: "",
    },
    {
      title: "Harmony Dental - AI Receptionist Voice Agent",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "HIPAA-compliant AI receptionist for Harmony Dental handling real patient workflows securely and autonomously. Features multi-step patient verification, secure appointment scheduling, prescription refills, lab results delivery, emergency detection, and automated reminders. Achieved 94% booking rate, 97% verification success, $2,400/month revenue recovery, 15 hours/week staff savings, 40% increase in new patient conversion, and 100% call answer rate with 24/7 availability. Live Demos: +1 (505) 356-8229 | +1 (507) 816-9529",
      technologies: [
        "Vapi",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Google Calendar",
        "Google Sheets",
        "MCP Servers",
        "HIPAA Compliance",
        "Leapcell",
      ],
      links: [
        {
          type: "Demo 2",
          href: "tel:+15078169529",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects.jpg",
      video: "",
    },
    {
      title: "ClearFlow Plumbing - Emergency Triage & Scheduling Voice Agent",
      href: "https://screenrec.com/share/gcdhpFflkS",
      dates: "2024",
      active: true,
      description:
        "AI receptionist for ClearFlow Plumbing handling emergency dispatch and service scheduling. Features real-time emergency classification (burst pipes, gas leaks, floods), automatic technician dispatch, dynamic pricing engine with upfront estimates, customer service history integration, and payment processing integration. Live Demo: +1 (702) 359-0236",
      technologies: [
        "Vapi",
        "n8n",
        "Google Sheets",
        "Google Calendar",
        "Payment Processing",
      ],
      links: [
        {
          type: "Demo",
          href: "tel:+17023590236",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Video",
          href: "https://screenrec.com/share/gcdhpFflkS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
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
      image: "/triageai.png",
      video: "",
    },
  ],
} as const;
