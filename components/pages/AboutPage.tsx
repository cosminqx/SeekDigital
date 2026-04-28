"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import RevealSection from "@/components/common/RevealSection";
import SectionHeader from "@/components/common/SectionHeader";
import { milestones, siteConfig, values } from "@/lib/site";

const team = [
  {
    id: "silviu",
    name: "Silviu Chiscareanu",
    role: "CEO & Technical Lead",
    image: "/assets/team/silviu.jpg",
    initials: "SC",
    bio: "Arhitectura proiectelor web, viziunea strategică a agenției și relațiile cu clienții tehnici. Experiență demonstrată în HoReCa și servicii locale. Administrator legal SEEK DIGITAL SRL.",
    tags: ["WordPress", "Webflow", "JavaScript", "Strategie"],
    responsibilities: [
      "Web development (WordPress, Webflow)",
      "Arhitectura proiectelor",
      "Viziunea strategică",
      "Relații clienți tehnici",
    ],
  },
  {
    id: "iulia",
    name: "Podaru Iulia",
    role: "Creative Director & Design Lead",
    image: "/assets/team/iulia.png",
    initials: "PI",
    bio: "Responsabilă de calitatea estetică a tuturor livrabilelor. UI/UX design, identitate vizuală și consistența brandului SEEK DIGITAL în fiecare proiect livrat.",
    tags: ["Figma", "UI/UX", "Branding", "Adobe CC"],
    responsibilities: [
      "UI/UX design (Figma)",
      "Identitate vizuală & branding",
      "Producție grafică campanii",
      "Consistența vizuală brand",
    ],
  },
  {
    id: "cosmin",
    name: "Lăcătuș Cosmin",
    role: "Performance Marketing Lead",
    image: "/assets/team/cosmin.png",
    initials: "LC",
    bio: "Specialist în campanii plătite și optimizarea conversiilor pentru IMM-uri. Gestionează bugetele de publicitate ale clienților cu focus pe ROI măsurabil și raportare clară.",
    tags: ["Meta Ads", "Google Ads", "SEO", "Analytics"],
    responsibilities: [
      "Meta Ads & Google Ads",
      "Strategie SEO & CRO",
      "Google Analytics 4",
      "Automatizări marketing",
    ],
  },
  {
    id: "tudor",
    name: "Mihalache Tudor",
    role: "Sales & Client Success",
    image: "/assets/team/tudor.png",
    initials: "MT",
    bio: "Responsabil de pipeline-ul de vânzări și relațiile pe termen lung cu clienții. Onboarding, project management operațional și colectarea feedback-ului după fiecare proiect.",
    tags: ["Sales", "HubSpot", "Project Mgmt", "Client NPS"],
    responsibilities: [
      "Prospecțiune & vânzări",
      "Onboarding clienți",
      "Project management",
      "CRM & NPS",
    ],
  },
];

const seekMethod = [
  {
    letter: "S",
    step: "SCAN",
    duration: "Ziua 1–2",
    description:
      "Discovery & Audit — înțelegem business-ul clientului, competiția și obiectivele reale.",
    output: "Brief creativ + propunere personalizată",
  },
  {
    letter: "E",
    step: "ENGAGE",
    duration: "Ziua 2–3",
    description:
      "Strategie & Propunere — mockup-uri vizuale, timeline și preț fix, fără surprize.",
    output: "Ofertă semnată + contract digital",
  },
  {
    letter: "E",
    step: "EXECUTE",
    duration: "Ziua 4–X",
    description:
      "Execuție — livrăm conform timeline agreat, update la 48h, 3 runde de revizuiri incluse.",
    output: "Livrabil final aprobat",
  },
  {
    letter: "K",
    step: "KEEP",
    duration: "Post-lansare",
    description:
      "Suport & Creștere — transfer complet, instruire client, monitorizare 30 zile.",
    output: "Client loializat + NPS colectat",
  },
];

const grainBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// ─── TeamMemberCard ───────────────────────────────────────────────────────────
function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative" style={{ animationDelay: `${index * 120}ms` }}>

      {/* Square image container */}
      <div
        className="relative mb-6 w-full overflow-hidden"
        style={{ aspectRatio: "1 / 1", borderRadius: 0, background: "#111111" }}
      >
        {/* Real image — hidden via state on error, not CSS display:none */}
        {!imgError ? (
          <Image
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            fill
            className="object-cover object-top transition-[filter] duration-700 group-hover:[filter:saturate(1)_!important]"
            style={{ filter: "saturate(0.8)" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={() => setImgError(true)}
            priority={index < 2}
          />
        ) : (
          /* Initials fallback */
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "#111111" }}
          >
            <span
              style={{
                fontFamily: "var(--font-display, 'Playfair Display', serif)",
                fontSize: "56px",
                fontWeight: 700,
                color: "#E8E4DC",
                opacity: 0.12,
                letterSpacing: "-0.02em",
              }}
            >
              {member.initials}
            </span>
          </div>
        )}

        {/* Hover overlay — responsibilities */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
          style={{
            background: "rgba(8,8,8,0.82)",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <ul className="space-y-1">
            {member.responsibilities.map((r) => (
              <li
                key={r}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(232,228,220,0.75)",
                }}
              >
                — {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Grain on image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            backgroundImage: grainBg,
            backgroundSize: "180px 180px",
            opacity: 0.04,
          }}
        />
      </div>

      {/* Info */}
      <div>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#666666",
            marginBottom: "8px",
          }}
        >
          {member.role}
        </p>

        <h3
          style={{
            fontFamily: "var(--font-display, 'Playfair Display', serif)",
            fontSize: "22px",
            fontWeight: 700,
            color: "#E8E4DC",
            letterSpacing: "-0.02em",
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </h3>

        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            lineHeight: 1.75,
            color: "#666666",
            marginBottom: "16px",
          }}
        >
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-2">
          {member.tags.map((tag) => (
            <span
              key={tag}
              style={{
                border: "0.5px solid #161925",
                color: "#E8E4DC",
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "4px 10px",
                background: "transparent",
                borderRadius: "2px",
                opacity: 0.65,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="border-b border-[#1f1f1f]">

      {/* HERO */}
      <RevealSection className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#666666",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "1px",
                height: "16px",
                background: "#161925",
              }}
              aria-hidden="true"
            />
            Despre noi
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display, 'Playfair Display', serif)",
              fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 900,
              color: "#E8E4DC",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              marginBottom: "32px",
            }}
          >
            Digitalizăm afaceri.
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 700 }}>
              Construim relații.
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-accent, 'Cormorant Garamond', serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "22px",
              lineHeight: 1.55,
              color: "#666666",
              maxWidth: "540px",
            }}
          >
            O echipă de 4 cofondatori din Iași, cu o misiune comună: să facem
            digitalul accesibil și profitabil pentru antreprenorii locali.
          </p>
        </div>
      </RevealSection>

      {/* TEAM */}
      <RevealSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Echipa fondatoare"
          title="Cunoaște-ne."
          subtitle="4 cofondatori complementari — web development, design, marketing și sales — care acoperă toate funcțiile cheie fără overhead salarial."
        />

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Governance strip */}
        <div
          className="mt-16 grid gap-6 border-t pt-10 sm:grid-cols-3"
          style={{ borderColor: "#1A1A1A" }}
        >
          {[
            { label: "Decizii operaționale", value: "Autonom per domeniu", note: "sub 5.000 lei" },
            { label: "Decizii strategice", value: "Majoritate 3/4", note: "5.000–20.000 lei" },
            { label: "Decizii majore", value: "Unanimitate", note: "peste 20.000 lei" },
          ].map((item) => (
            <div key={item.label}>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", marginBottom: "6px" }}>
                {item.label}
              </p>
              <p style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)", fontSize: "18px", fontWeight: 700, color: "#E8E4DC", marginBottom: "4px" }}>
                {item.value}
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#444" }}>
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* METODA SEEK */}
      <RevealSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Procesul nostru"
          title="Metoda SEEK în 4 pași."
          subtitle="Fiecare proiect urmează același proces standardizat — calitate consistentă indiferent de cine conduce proiectul."
        />

        <div className="mt-16 grid gap-px bg-[#1A1A1A] sm:grid-cols-2 lg:grid-cols-4">
          {seekMethod.map((step) => (
            <div
              key={step.step}
              className="relative overflow-hidden bg-[#080808] p-8"
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontSize: "120px",
                  fontWeight: 900,
                  color: "#E8E4DC",
                  opacity: 0.03,
                  position: "absolute",
                  top: "-16px",
                  right: "-8px",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                {step.letter}
              </span>

              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#444", marginBottom: "16px" }}>
                {step.duration}
              </p>
              <p style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)", fontSize: "28px", fontWeight: 700, color: "#E8E4DC", letterSpacing: "-0.02em", marginBottom: "12px", lineHeight: 1.1 }}>
                {step.step}
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 1.75, color: "#666", marginBottom: "20px" }}>
                {step.description}
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#161925", borderTop: "0.5px solid #1A1A1A", paddingTop: "16px" }}>
                → {step.output}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* VALUES */}
      <RevealSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Valori"
          title="Misiune și valori."
          subtitle="Construim o experiență de lucru simplă și corectă, cu focus pe rezultate care pot fi văzute în business."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="p-8">
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#161925", marginBottom: "16px" }}>
                {value.title}
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 1.75, color: "#666666" }}>
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </RevealSection>

      {/* TIMELINE */}
      <RevealSection className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Roadmap"
          title="Planul de creștere."
          subtitle="Public și realist, cu repere clare în primii ani de activitate."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {milestones.map((milestone, index) => (
            <Card key={milestone.label} className="relative overflow-hidden p-8">
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-display, 'Playfair Display', serif)",
                  fontSize: "96px",
                  fontWeight: 900,
                  color: "#E8E4DC",
                  opacity: 0.03,
                  position: "absolute",
                  bottom: "-16px",
                  right: "-4px",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                {index + 1}
              </span>

              <div style={{ width: "32px", height: "32px", border: "0.5px solid #161925", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#161925" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)", fontSize: "20px", fontWeight: 700, color: "#E8E4DC", letterSpacing: "-0.02em", marginBottom: "10px", lineHeight: 1.2 }}>
                {milestone.label}
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 1.75, color: "#666666" }}>
                {milestone.description}
              </p>
            </Card>
          ))}
        </div>
      </RevealSection>

      {/* COMPANY FACTS */}
      <RevealSection className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-40">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-8">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#161925", marginBottom: "16px" }}>
              Companie
            </p>
            <h3 style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)", fontSize: "30px", fontWeight: 700, color: "#E8E4DC", letterSpacing: "-0.03em", marginBottom: "8px" }}>
              {siteConfig.company}
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-6 border-t pt-6" style={{ borderColor: "#1A1A1A" }}>
              {[
                { num: "4", label: "Cofondatori" },
                { num: "Iun 2026", label: "Data lansării" },
                { num: "Iași", label: "Sediu" },
                { num: "6201 + 7311", label: "Coduri CAEN" },
              ].map((fact) => (
                <div key={fact.label}>
                  <p style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)", fontSize: "22px", fontWeight: 700, color: "#E8E4DC", marginBottom: "4px" }}>
                    {fact.num}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#444" }}>
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#161925", marginBottom: "16px" }}>
              Direcție
            </p>
            <p style={{ fontFamily: "var(--font-accent, 'Cormorant Garamond', serif)", fontStyle: "italic", fontWeight: 300, fontSize: "20px", lineHeight: 1.6, color: "#666666", marginBottom: "20px" }}>
              "Îți construim prezența digitală care aduce clienți noi în 30 de zile — sau îți returnăm 50% din investiție."
            </p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 1.75, color: "#444" }}>
              Ne concentrăm pe lansări rapide, colaborări clare și o bază operațională care susține mai multe proiecte simultan.
            </p>
          </Card>
        </div>
      </RevealSection>
    </div>
  );
}