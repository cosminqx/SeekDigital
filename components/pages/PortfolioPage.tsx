"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import RevealSection from "@/components/common/RevealSection";
import SectionHeader from "@/components/common/SectionHeader";
import { portfolioProjects, testimonials } from "@/lib/site";

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof portfolioProjects)[0];
  featured?: boolean;
}) {
  return (
    <RevealSection>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="group block h-full"
      >
        <Card
          className={`relative h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(43,43,143,0.15)] ${
            featured
              ? "border-seek/60 shadow-[inset_0_0_20px_rgba(21,22,103,0.08)]"
              : ""
          }`}
        >
          {/* Screenshot Preview Container */}
          <div
            className={`relative bg-[linear-gradient(135deg,#111111_0%,#171717_35%,#0f0f0f_100%)] overflow-hidden ${
              featured ? "aspect-[16/12]" : "aspect-[16/10]"
            }`}
          >
            {/* Live preview iframe */}
            <iframe
              src={project.url}
              className="h-full w-full opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              style={{ pointerEvents: "none" }}
              loading="lazy"
              title={project.title}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="max-w-sm">
                <p className="font-display text-xs uppercase tracking-[0.28em] text-seek-violet">
                  {project.category}
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {project.title}
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-seek-violet bg-seek-violet/20 text-seek-violet transition-all group-hover:bg-seek-violet group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="border-t border-seek p-6">
            <h3 className="font-display text-xl font-bold uppercase tracking-[-0.03em] text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </a>
    </RevealSection>
  );
}

export default function PortfolioPage() {
  return (
    <div className="border-b border-[#1f1f1f]">
      {/* Hero Section */}
      <RevealSection className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <SectionHeader
          eyebrow="Portofoliu"
          title="Proiecte Recente"
          subtitle="Fiecare proiect e construit cu intentie, viteza si rezultate masurabile."
        />
      </RevealSection>

      {/* Projects Grid: 3 columns on desktop, stack on mobile */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {portfolioProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <RevealSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Testimoniale"
          title="Ce spun clienții"
          subtitle="Parteneriate pe termen lung, construite pe transparență și rezultate."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1f1f1f] bg-white/[0.04] font-display text-lg font-bold text-accent">
                  {item.initials}
                </div>
                <div>
                  <p className="font-display text-lg font-bold uppercase tracking-[-0.03em] text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted">{item.business}</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-8 text-muted">
                "{item.quote}"
              </p>
            </Card>
          ))}
        </div>
      </RevealSection>

      {/* CTA Section */}
      <RevealSection className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-40">
        <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-[#1f1f1f] bg-white/[0.03] p-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">
              Proiectul tău urmează
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white">
              Gata să-ți construim prezența digitală?
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-6 text-sm font-medium bg-seek-violet text-white hover:bg-seek-violet-glow transition-colors duration-300 whitespace-nowrap"
          >
            Hai să vorbim <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </RevealSection>
    </div>
  );
}
