import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import BuildFlow from "@/components/BuildFlow";
import SmartImage from "@/components/SmartImage";
import { rentflow } from "@/lib/data";

export const metadata: Metadata = {
  title: "RentFlow Case Study",
  description:
    "How RentFlow was built as a full-stack rental management application and independently tested with manual QA, API and database testing, and Selenium/Java automation integrated into CI/CD.",
};

export default function RentFlowCaseStudy() {
  return (
    <div className="section-container py-16 md:py-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-[13px] text-ink-soft hover:text-ink"
      >
        <span aria-hidden="true">&larr;</span> Back to projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="font-mono text-[13px] text-gold">Case Study</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
          {rentflow.name}
        </h1>
        <p className="mt-3 text-lg text-ink-soft">{rentflow.subtitle}</p>
        <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft">
          {rentflow.description}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={rentflow.liveUrl} variant="primary">
            View Live Application
          </Button>
          <Button href={rentflow.devRepoUrl} variant="secondary">
            {rentflow.devRepoLabel}
          </Button>
          <Button href={rentflow.qaRepoUrl} variant="secondary">
            {rentflow.qaRepoLabel}
          </Button>
        </div>
      </header>

      <div className="mt-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-line bg-navy-50">
        <SmartImage
          src={rentflow.image}
          alt="RentFlow application screenshot"
          label="RentFlow screenshot not added yet"
        />
      </div>

      {/* Overview */}
      <section className="mt-16 grid grid-cols-1 gap-6 border-t border-line pt-12 md:grid-cols-[0.35fr_0.65fr]">
        <h2 className="font-display text-2xl text-ink">Overview</h2>
        <div className="max-w-prose space-y-4">
          <p className="text-[15px] leading-relaxed text-ink-soft">
            RentFlow is a rental and property management application covering
            the operational core of managing rental properties. It is built as
            one application with two independent, clearly separated
            workstreams: development and quality engineering.
          </p>
          {rentflow.applicationAreas.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {rentflow.applicationAreas.map((f) => (
                <Badge key={f}>{f}</Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Development */}
      <section className="mt-14 grid grid-cols-1 gap-6 border-t border-line pt-12 md:grid-cols-[0.35fr_0.65fr]">
        <h2 className="font-display text-2xl text-ink">Development</h2>
        <div className="max-w-prose space-y-4">
          <p className="text-[15px] leading-relaxed text-ink-soft">
            Built with the Next.js App Router and TypeScript on the frontend,
            styled with Tailwind CSS, and backed by PostgreSQL through Prisma
            for the data layer. The application structure follows the App
            Router conventions for routing and server/client component
            separation.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {rentflow.devTech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Engineering */}
      <section className="mt-14 grid grid-cols-1 gap-6 border-t border-line pt-12 md:grid-cols-[0.35fr_0.65fr]">
        <h2 className="font-display text-2xl text-ink">Quality Engineering</h2>
        <div className="max-w-prose space-y-4">
          <p className="text-[15px] leading-relaxed text-ink-soft">
            Once the application was functional, I moved into testing it as
            an independent workstream, starting from requirements analysis
            and test planning, through to structured manual testing and
            automation. The QA work lives in its own repository,{" "}
            <code className="rounded bg-navy-50 px-1.5 py-0.5 font-mono text-[13px] text-navy">
              rentflow-qa
            </code>
            , separate from the application code.
          </p>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-1.5 pt-1 sm:grid-cols-2">
            {rentflow.qaAreas.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[14px] text-ink-soft"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Automation */}
      <section className="mt-14 grid grid-cols-1 gap-6 border-t border-line pt-12 md:grid-cols-[0.35fr_0.65fr]">
        <h2 className="font-display text-2xl text-ink">Automation</h2>
        <div className="max-w-prose space-y-4">
          <p className="text-[15px] leading-relaxed text-ink-soft">
            {rentflow.automationNote}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Badge>Selenium</Badge>
            <Badge>Java</Badge>
          </div>
        </div>
      </section>

      {/* CI/CD */}
      <section className="mt-14 grid grid-cols-1 gap-6 border-t border-line pt-12 md:grid-cols-[0.35fr_0.65fr]">
        <h2 className="font-display text-2xl text-ink">CI/CD</h2>
        <div className="max-w-prose space-y-4">
          <p className="text-[15px] leading-relaxed text-ink-soft">
            {rentflow.cicdNote}
          </p>
        </div>
      </section>

      {/* Visual story */}
      <section className="mt-14 border-t border-line pt-12">
        <h2 className="font-display text-2xl text-ink">Build &rarr; Test &rarr; Automate &rarr; Integrate &rarr; Quality</h2>
        <div className="mt-8">
          <BuildFlow />
        </div>
      </section>

      {/* Repository structure */}
      <section className="mt-14 border-t border-line pt-12 pb-4">
        <h2 className="font-display text-2xl text-ink">Repository Structure</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href={rentflow.devRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-navy/20 bg-navy-50 p-5 transition-colors hover:border-navy/40"
          >
            <p className="font-mono text-[12px] text-navy">RentFlow</p>
            <p className="mt-1 text-[13.5px] text-ink-soft">
              Application development repository
            </p>
          </a>
          <a
            href={rentflow.qaRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-gold/30 bg-gold/5 p-5 transition-colors hover:border-gold/50"
          >
            <p className="font-mono text-[12px] text-gold">rentflow-qa</p>
            <p className="mt-1 text-[13.5px] text-ink-soft">
              QA / testing repository
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
