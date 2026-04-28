"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RevealSection from "@/components/common/RevealSection";
import SectionHeader from "@/components/common/SectionHeader";
import { portfolioProjects, testimonials } from "@/lib/site";

export default function PortfolioPage() {
  return (
    <div className="border-b border-[#1f1f1f]">
      <RevealSection className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <SectionHeader
          eyebrow="Portofoliu"
          title="Proiectele noastre"
          subtitle="Suntem la început, așa că am pregătit poziționarea și sistemele. Portofoliul real urmează imediat după lansare."
        />
      </RevealSection>

      <RevealSection className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-sm border border-[#1f1f1f] bg-white/[0.03] px-5 py-4 text-sm text-muted">
          Portofoliu în construcție — lansăm în Septembrie 2026
        </div>
      </RevealSection>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.map((project) => (
            <RevealSection key={project.title}>
              <Card className="overflow-hidden bg-card">
                <div className="relative aspect-[4/3] border-b border-[#1f1f1f] bg-[linear-gradient(135deg,#111111_0%,#171717_35%,#0f0f0f_100%)]">
                  <Image
                    src="/images/portfolio-placeholder.svg"
                    alt={project.title}
                    fill
                    className="object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_100%)]" />
                  <div className="absolute left-4 top-4">
                    <Badge variant="accent">{project.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <p className="max-w-[220px] text-sm uppercase tracking-[0.18em] text-white/80">
                      {project.status}
                    </p>
                    <span className="rounded-[2px] border border-[#1f1f1f] bg-black/70 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                      Preview
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-6 w-full" disabled>
                    Vezi proiectul <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </RevealSection>
          ))}
        </div>
      </div>

      <RevealSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Testimoniale"
          title="Ce spun clienții"
          subtitle="Două perspective placeholder până când publicăm primele studii de caz finale."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1f1f1f] bg-white/[0.04] font-display text-lg font-bold text-accent">
                  {item.initials}
                </div>
                <div>
                  <p className="font-display text-lg font-bold uppercase tracking-[-0.03em] text-white">{item.name}</p>
                  <p className="text-sm text-muted">{item.business}</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-8 text-muted">“{item.quote}”</p>
            </Card>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-40">
        <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-[#1f1f1f] bg-white/[0.03] p-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">Next step</p>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white">
              Vrei să devii unul dintre primele proiecte publice?
            </h3>
          </div>
          <Button asChild>
            <Link href="/contact">Hai să discutăm</Link>
          </Button>
        </div>
      </RevealSection>
    </div>
  );
}
