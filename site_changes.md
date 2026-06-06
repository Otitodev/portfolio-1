# otito.site — Changes Required
Instructions for the coding agent. All changes are in `resume.tsx`.

---

## 1. Fix Location

**Change:**
```ts
location: "Lagos, Nigeria",
locationLink: "https://www.google.com/maps/place/lagos",
```

**To:**
```ts
location: "Enugu, Nigeria",
locationLink: "https://www.google.com/maps/place/enugu",
```

---

## 2. Replace description (Remove summary entirely)

**Remove the entire `summary` field.**

**Change `description` to:**
```ts
description:
  "Python backend engineer and AI automation specialist with 3+ years shipping production systems. My work runs right now: a HIPAA-compliant voice receptionist at 94% autonomous booking rate, an emergency triage agent handling 100% of inbound service calls, a multi-tenant WhatsApp AI SaaS, and a production MCP server connecting Claude to external business systems. I came into engineering from healthcare — BSc in Medical Laboratory Science — which is why I gravitate toward AI that touches real workflows, not just demos. Deep daily proficiency with Claude, LangGraph, n8n, Vapi, and MCP integrations.",
```

---

## 3. Update Skills Array

**Replace the entire `skills` array with:**
```ts
skills: [
  "Python",
  "FastAPI",
  "Django",
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
  "MySQL",
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
```

---

## 4. Update Phorion AI Work Description

**Change:**
```ts
description:
  "Engineered resilient backend systems for AI native systems",
```

**To:**
```ts
description:
  "Building resilient backend services for AI-native applications — scalable async APIs, data pipelines, and agent infrastructure. Contributing to architecture decisions and engineering standards in a distributed remote team.",
```

---

## 5. Remove or Replace Freelance Work Entry

The Freelance entry is generic and redundant — the real freelance work is already covered by Whaply, Harmony Dental, ClearFlow, and Addpost in the projects section. Either delete it entirely or replace the description with:

```ts
description:
  "Designed and shipped AI-powered systems for clients across healthcare, home services, and SaaS — including a HIPAA-compliant voice AI receptionist (94% autonomous booking rate), a live emergency triage agent, and a multi-tenant WhatsApp AI platform. Full stack across FastAPI, LangGraph, Claude API, Vapi, n8n, and Supabase.",
```

---

## 6. Fix Whaply Date

**Change:**
```ts
dates: "2025 - Present",
```

**To:**
```ts
dates: "2024 - Present",
```

---

## 7. Add LabLens MCP Project

Add this as the **first item** in the `projects` array (before Whaply):

```ts
{
  title: "LabLens MCP — Claude to Clinical Data Integration",
  href: "https://github.com/Otitodev/lablens",
  dates: "2024",
  active: true,
  description:
    "Production MCP (Model Context Protocol) server that gives Claude real-time access to external clinical lab data systems — enabling Claude to query, analyze, and reason about structured external data without manual copy-paste. Designed tool definition schema, context injection layer, and structured output validation. The same MCP architecture applies to connecting Claude to Microsoft 365, Smartsheet, CRM platforms, and other enterprise business systems.",
  technologies: [
    "MCP Server",
    "Claude API",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Healthcare AI",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Otitodev/lablens",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "",
  video: "",
},
```

---

## 8. Fix X Handle (Optional but Recommended)

Currently:
```ts
url: "https://x.com/Paynell1",
```

If this account does not have AI/engineering content visible, update to your correct handle or remove from navbar to avoid recruiters landing on an unrelated profile.

---

## Summary of All Changes

| # | What | File | Action |
|---|------|------|--------|
| 1 | Location | resume.tsx | Lagos → Enugu |
| 2 | Description | resume.tsx | Replace with 4-sentence version |
| 2 | Summary | resume.tsx | Delete entirely |
| 3 | Skills | resume.tsx | Add MCP, Claude Projects, Zapier, Make, LangChain, Business Process Automation |
| 4 | Phorion AI description | resume.tsx | Expand from 1 sentence to 2 |
| 5 | Freelance entry | resume.tsx | Delete or replace with specific description |
| 6 | Whaply date | resume.tsx | 2025 → 2024 |
| 7 | LabLens MCP | resume.tsx | Add as new project (first in array) |
| 8 | X handle | resume.tsx | Verify or remove from navbar |
