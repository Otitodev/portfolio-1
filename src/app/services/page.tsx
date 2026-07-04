import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Freelance engineering services offered by Otito Ogene: AI voice agents, backend systems, automation platforms, and AI integrations.",
};

const BLUR_FADE_DELAY = 0.04;

type Service = {
  name: string;
  summary: string;
  includes: string[];
  startingFrom: string;
  timeline: string;
};

const services: Service[] = [
  {
    name: "AI Agent Development",
    summary:
      "Production AI agents that actually run in production — voice, chat, and workflow. From Vapi receptionists that book appointments and dispatch jobs, to WhatsApp / web-chat agents with per-tenant configuration, to multi-step LangGraph workflows that hand off to humans when they should.",
    includes: [
      "Discovery, agent design, and prompt engineering",
      "Voice agent build (Vapi, LangGraph, tool calls, telephony)",
      "Chat agent build (WhatsApp, web widget, Slack, custom)",
      "Multi-agent orchestration and tool integrations (calendar, CRM, custom APIs)",
      "Deployment, evaluation, monitoring, and 30 days of post-launch support",
    ],
    startingFrom: "$2,500 USD",
    timeline: "3–5 weeks",
  },
  {
    name: "Backend Engineering",
    summary:
      "Python/FastAPI backends, API integrations, and internal tools. For teams that need a senior engineer to ship a well-scoped system without hiring full-time.",
    includes: [
      "API design and implementation (FastAPI, REST, webhooks)",
      "Database modelling (PostgreSQL, Supabase, Redis)",
      "Third-party integrations (Stripe, Twilio, HubSpot, Epic FHIR, etc.)",
      "Deployment on Railway, Fly.io, or your cloud of choice",
    ],
    startingFrom: "$1,800 USD",
    timeline: "2–6 weeks, depending on scope",
  },
  {
    name: "Automation Systems",
    summary:
      "End-to-end business process automation with n8n, Make.com, and custom code — the kind that runs quietly and saves a team from hours of manual work each week.",
    includes: [
      "Process mapping and workflow design",
      "n8n / Make.com build with custom nodes where needed",
      "Integration with your existing stack (Slack, Notion, HubSpot, Sheets, etc.)",
      "Documentation and handoff",
    ],
    startingFrom: "$1,200 USD",
    timeline: "1–3 weeks",
  },
  {
    name: "AI Integrations & MCP Servers",
    summary:
      "Retrieval, tool use, and agentic workflows built on Claude, OpenAI, and the Model Context Protocol. Includes MCP server design for teams exposing internal systems to LLMs.",
    includes: [
      "MCP server design and implementation",
      "RAG and retrieval pipelines",
      "Claude Projects, tool use, and multi-agent orchestration",
      "Evaluation harness and prompt-versioning",
    ],
    startingFrom: "$2,000 USD",
    timeline: "2–4 weeks",
  },
  {
    name: "Consulting & Technical Audit",
    summary:
      "A focused review of an existing AI, backend, or automation system, with a written report of what to fix, what to keep, and what to build next.",
    includes: [
      "60–90 minute working session",
      "Code and architecture review",
      "Written report with prioritised recommendations",
      "Follow-up call within 30 days",
    ],
    startingFrom: "$400 USD",
    timeline: "1 week",
  },
];

export default function ServicesPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">Services</h1>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <p className="text-sm text-muted-foreground mb-8 max-w-prose">
          I work with founders and product teams on AI systems that run in
          production. Every engagement starts with a short discovery call so
          scope, timeline, and price can be agreed in writing before any work
          begins. Prices below are indicative starting points in USD and are
          finalised in a written proposal.
        </p>
      </BlurFade>

      <div className="space-y-6 mb-12">
        {services.map((service, i) => (
          <BlurFade key={service.name} delay={BLUR_FADE_DELAY * (3 + i)}>
            <div className="rounded-lg border p-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h2 className="font-medium text-base tracking-tight">
                  {service.name}
                </h2>
                <span className="text-xs text-muted-foreground">
                  From {service.startingFrom} · {service.timeline}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {service.summary}
              </p>
              <ul className="text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <div className="rounded-lg border p-4 text-sm text-muted-foreground max-w-prose mb-8">
          <p className="mb-2 font-medium text-foreground">How pricing works</p>
          <p className="mb-2">
            Every project is quoted in a written proposal after a discovery
            call. Fixed-scope projects use a 30&ndash;50% deposit and milestone
            payments. Retainers and hourly work are billed weekly or monthly in
            arrears.
          </p>
          <p>
            Payment terms, deliverables, and cancellation rights are governed
            by the signed proposal, the{" "}
            <Link href="/terms" className="underline underline-offset-4">
              Terms of Service
            </Link>
            , and the{" "}
            <Link href="/refund" className="underline underline-offset-4">
              Refund &amp; Cancellation Policy
            </Link>
            .
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Start a project
          </Link>
          <Link
            href="mailto:otitodrichukwu@gmail.com"
            className="inline-flex items-center justify-center rounded-md border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Email me directly
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}
