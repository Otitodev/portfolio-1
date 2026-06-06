import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Otito Ogene",
  initials: "OO",
  url: "https://github.com/otitodev", // Update with your portfolio website if you have one
  location: "Enugu, Nigeria",
  locationLink: "https://www.google.com/maps/place/enugu",
  description:
    "Python backend engineer specialising in AI agents, voice AI, and automation.",
  summary:
    "I build AI systems that actually run in production.\n\nRight now I have a voice AI answering patient calls for a dental practice, booking appointments autonomously 94% of the time. Another one handling emergency dispatch for a plumbing company. And a WhatsApp AI platform where multiple businesses each get their own AI agent.\n\nI also built an MCP server — a way to wire Claude directly into external business systems so it can query live data instead of working from copy-pasted text.\n\nI came into this from healthcare — BSc in Medical Laboratory Science — which is probably why I keep ending up on projects where the AI has to work for real people, not just look good in a demo.\n\nDay to day I'm deep in Claude, LangGraph, n8n, and Vapi.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "FastAPI",
    "TypeScript",
    "Next.js",
    "AI Agents",
    "LangGraph",
    "LangChain",
    "Claude API",
    "Claude Projects",
    "MCP (Model Context Protocol)",
    "OpenAI API",
    "Vapi",
    "Voice AI",
    "n8n Automation",
    "Zapier",
    "Make.com",
    "Workflow Automation",
    "Business Process Automation",
    "LLM Integration",
    "Prompt Engineering",
    "PostgreSQL",
    "Supabase",
    "Redis",
    "REST APIs",
    "Webhooks",
    "API Integration",
    "Docker",
    "GitHub Actions",
    "Railway",
    "HIPAA Compliance",
    "Healthcare AI",
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
      start: "Oct 2025",
      end: "Present",
      description:
        "Building resilient backend services for AI-native applications — scalable async APIs, data pipelines, and agent infrastructure. Contributing to architecture decisions and engineering standards in a distributed remote team.",
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
        "Designed and shipped AI-powered systems for clients across healthcare, home services, and SaaS — including a HIPAA-compliant voice AI receptionist (94% autonomous booking rate), a live emergency triage agent, and a multi-tenant WhatsApp AI platform. Full stack across FastAPI, LangGraph, Claude API, Vapi, n8n, and Supabase.",
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
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/whaply.gif",
      video: "",
    },
    {
      title: "LabLens MCP — Medical Lab Intelligence Server",
      href: "https://github.com/Otitodev/lablens",
      dates: "2024",
      active: true,
      description:
        "Production MCP (Model Context Protocol) server that exposes four AI-powered tools for interpreting patient lab data — lab panel interpretation, critical value flagging, clinical summary generation, and differential diagnosis ranking. Supports SHARP Extension Specs for FHIR context propagation across multi-agent call chains, and integrates with Epic's FHIR R4 sandbox via OAuth 2.0 JWT assertion. Supports Anthropic Claude, OpenAI, Gemini, and Mistral as swappable LLM providers. Built for the Agents Assemble — Healthcare AI Endgame hackathon. Live at lablens.up.railway.app",
      technologies: [
        "MCP Server",
        "Claude API",
        "FastAPI",
        "Python",
        "FHIR R4",
        "Epic Integration",
        "OAuth 2.0",
        "SHARP Extension",
        "Multi-Agent",
        "Railway",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Otitodev/lablens",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://lablens.up.railway.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mcp-image.webp",
      video: "",
    },
    {
      title: "Callahan Pipe & Drain - AI Voice Agent",
      href: "https://www.callahanpipeanddrain.com/",
      dates: "2025",
      active: true,
      description:
        "Live AI voice agent for Callahan Pipe & Drain, a Chicago plumbing company. Embedded on the production site as a one-click call button — handles inbound service requests, emergency triage, and scheduling, then routes to human dispatch when needed. Built on Vapi with FastAPI backend integrations for calendar and CRM.",
      technologies: [
        "Vapi",
        "FastAPI",
        "Python",
        "n8n",
        "Google Calendar",
        "Web Call Widget",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.callahanpipeanddrain.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/callahanpipe%26drain.png",
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
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/addpost.gif",
      video: "",
    },
    {
      title: "Klipit - AI Podcast Clipping Platform",
      href: "https://www.tryklipit.com/",
      dates: "2025 - In Development",
      active: true,
      description:
        "AI platform that turns long-form podcasts into ready-to-post short-form clips. Transcribes episodes, identifies the most shareable moments (bold takes, contrarian opinions, emotional stories, how-tos), scores each clip 0–100 for engagement, generates hooks, and exports formatted for TikTok, Reels, Shorts, LinkedIn, and X. Ships with a REST API and webhooks for n8n / Make integration. Currently in active development.",
      technologies: [
        "FastAPI",
        "Python",
        "Next.js",
        "LLM Integration",
        "REST API",
        "Webhooks",
        "ffmpeg",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.tryklipit.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Klipit_WIP.png",
      video: "",
    },
    {
      title: "Harmony Dental - AI Receptionist Voice Agent",
      href: "tel:+15078169529",
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
          icon: <Icons.phone className="size-3" />,
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
          icon: <Icons.phone className="size-3" />,
        },
        {
          type: "Video",
          href: "https://screenrec.com/share/gcdhpFflkS",
          icon: <Icons.video className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Amara - Document to Audiobook",
      href: "https://github.com/Otitodev/Amara",
      dates: "2025",
      active: true,
      description:
        "Personal project I built so I could listen to documents on the go. Upload a PDF, DOCX, TXT, or Markdown file and get back a clean MP3. Supports four TTS providers (Edge, Google, OpenAI, ElevenLabs), OCR fallback for scanned documents, async processing so uploads don't block the UI, and a history view with playback and download.",
      technologies: [
        "FastAPI",
        "Python",
        "PostgreSQL",
        "SQLAlchemy",
        "OpenAI TTS",
        "ElevenLabs",
        "Tesseract OCR",
        "ffmpeg",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Otitodev/Amara",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/amara.png",
      video: "",
    },
  ],
} as const;
