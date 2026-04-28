"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RevealSection from "@/components/common/RevealSection";
import SectionHeader from "@/components/common/SectionHeader";
import { founderSkills, milestones, siteConfig, values } from "@/lib/site";

export default function AboutPage() {
  return (
    <div className="border-b border-[#222222]">
      <RevealSection className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <SectionHeader
          eyebrow="Despre"
          title="Fondatorul și povestea"
          subtitle="SEEK DIGITAL pornește din experiența practică a lui Silviu Chiscareanu în proiecte digitale pentru HoReCa și business-uri locale."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center">
          <div className="mx-auto flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-full border border-[#222222] bg-card">
            <Image src="/images/founder-placeholder.svg" alt="Silviu Chiscareanu" width={200} height={200} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-5">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-parchment sm:text-4xl">
                Silviu Chiscareanu
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-accent">Fondator & Developer</p>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-muted">
              Am lucrat pe proiecte web pentru restaurante, servicii și afaceri locale din România și am construit SEEK DIGITAL pentru antreprenori care vor comunicare clară, livrare rapidă și rezultate măsurabile.
            </p>
            <div className="flex flex-wrap gap-2">
              {founderSkills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Valori"
          title="Misiune și valori"
          subtitle="Construim o experiență de lucru simplă și corectă, cu focus pe rezultate care pot fi văzute în business."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="p-6">
              <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">{value.title}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{value.description}</p>
            </Card>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Roadmap"
          title="Timeline"
          subtitle="Planul de creștere este public și realist, cu repere clare în primii ani de activitate."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {milestones.map((milestone, index) => (
            <Card key={milestone.label} className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-accent text-sm font-semibold text-parchment">
                {index + 1}
              </div>
              <p className="mt-6 font-display text-xl font-bold uppercase tracking-[-0.03em] text-parchment">{milestone.label}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{milestone.description}</p>
            </Card>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-40">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-8">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">Companie</p>
            <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-[-0.03em] text-parchment">
              {siteConfig.company}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              Iași · CAEN 6201 + 7311 · Înregistrat Iunie 2026
            </p>
          </Card>
          <Card className="p-8">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">Direcție</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Ne concentrăm pe lansări rapide, colaborări clare și o bază operațională care poate susține mai multe proiecte în paralel.
            </p>
          </Card>
        </div>
      </RevealSection>
    </div>
  );
}
