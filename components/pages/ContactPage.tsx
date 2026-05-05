"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RevealSection from "@/components/common/RevealSection";
import SectionHeader from "@/components/common/SectionHeader";
import { toast } from "@/components/ui/toast";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { siteConfig, contactOptions } from "@/lib/site";

const fieldClassName =
  "w-full glass-effect-sm rounded-lg bg-seek-glass px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted focus:ring-2 focus:ring-[rgba(43,43,143,0.18)] focus:glass-shadow-sm";

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "Website",
      budget: "2500–7500 lei",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus("sending");
    try {
      const formData = new FormData();
      formData.append("access_key", "0cb7c12a-97fe-429a-988c-b946432b7e33");
      formData.append("name", data.fullName);
      formData.append("email", data.email);
      if (data.phone) {
        formData.append("phone", data.phone);
      }
      formData.append("service", data.service);
      formData.append("budget", data.budget);
      formData.append("message", data.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
        toast({
          title: "Am primit mail-ul tău",
          description: "Îți vom răspunde curând cu o propunere personalizată.",
        });
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        toast({
          title: "Eroare la trimitere",
          description: "A apărut o problemă. Te rugăm să încerci din nou.",
        });
      }
    } catch (error) {
      setSubmitStatus("error");
      toast({
        title: "Eroare la trimitere",
        description: "A apărut o problemă. Te rugăm să încerci din nou.",
      });
    }
  };

  return (
    <div className="border-b border-seek">
      <RevealSection className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <SectionHeader
          eyebrow="Contact"
          title="Hai să vorbim"
          subtitle="Trimite-ne câteva detalii și îți răspundem cu o propunere clară, fără obligații inutile."
        />
      </RevealSection>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-40">
        <RevealSection className="space-y-6">
          <Card className="p-6">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">Date de contact</p>
            <div className="mt-6 space-y-4 text-sm text-white">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-seek-violet">
                <Mail className="h-4 w-4 text-seek-violet" /> {siteConfig.email}
              </a>
              <a href={siteConfig.whatsapp} className="flex items-center gap-3 transition hover:text-seek-violet">
                <MessageCircle className="h-4 w-4 text-seek-violet" /> Scrie-ne pe WhatsApp
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 glass-effect-sm rounded-lg border-seek px-3 py-2 text-xs uppercase tracking-[0.2em] text-muted">
              <span className="h-2 w-2 rounded-full bg-seek-violet" /> Răspundem în maxim 24h
            </div>
          </Card>

          <Card className="p-6">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">WhatsApp</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Pentru o discuție rapidă, apasă butonul de mai jos și îți răspundem direct în conversație.
            </p>
            <Button asChild className="mt-6 w-full">
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                Scrie-ne pe WhatsApp
              </a>
            </Button>
          </Card>

        </RevealSection>

        <RevealSection>
          <Card className="p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-white">Nume complet *</span>
                  <input className={fieldClassName} placeholder="Nume și prenume" {...register("fullName")} />
                  {errors.fullName ? <p className="text-sm text-red-400">{errors.fullName.message}</p> : null}
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-white">Email *</span>
                  <input className={fieldClassName} placeholder="contact@firma.ro" {...register("email")} />
                  {errors.email ? <p className="text-sm text-red-400">{errors.email.message}</p> : null}
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm text-white">Telefon</span>
                <input className={fieldClassName} placeholder="07xx xxx xxx" {...register("phone")} />
                {errors.phone ? <p className="text-sm text-red-400">{errors.phone.message}</p> : null}
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-white">Serviciu dorit *</span>
                  <select className={fieldClassName} {...register("service")}>
                    {contactOptions.services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service ? <p className="text-sm text-red-400">{errors.service.message}</p> : null}
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-white">Buget estimat *</span>
                  <select className={fieldClassName} {...register("budget")}>
                    {contactOptions.budgets.map((budget) => (
                      <option key={budget}>{budget}</option>
                    ))}
                  </select>
                  {errors.budget ? <p className="text-sm text-red-400">{errors.budget.message}</p> : null}
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm text-white">Mesaj *</span>
                <textarea
                  className={`${fieldClassName} min-h-[160px] resize-none`}
                  placeholder="Spune-ne mai multe despre business-ul tău și obiectivele proiectului."
                  {...register("message")}
                />
                {errors.message ? <p className="text-sm text-red-400">{errors.message.message}</p> : null}
              </label>

              <label className="flex items-start gap-3 text-sm text-muted">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded-md border border-seek bg-seek-glass text-seek-violet focus:ring-2 focus:ring-[rgba(43,43,143,0.18)]"
                  {...register("consent")}
                />
                <span>
                  Sunt de acord cu prelucrarea datelor.
                  {errors.consent ? <span className="mt-1 block text-red-400">{errors.consent.message}</span> : null}
                </span>
              </label>

              <Button type="submit" className="w-full" disabled={isSubmitting || submitStatus === "sending"}>
                {submitStatus === "sending" ? "Se trimite..." : submitStatus === "success" ? "Mesaj trimis!" : "Trimite mesajul"}
              </Button>

              {submitStatus === "success" && (
                <div className="rounded-lg border border-seek-violet/40 bg-seek-violet/10 p-4 text-sm text-seek-violet">
                  ✓ Am primit mail-ul tău, iti vom raspunde curand
                </div>
              )}

              <div className="flex items-center gap-3 border-t border-seek pt-5 text-xs uppercase tracking-[0.18em] text-muted">
                <PhoneCall className="h-4 w-4 text-seek-violet" />
                Vei primi răspuns de la SEEK DIGITAL, nu de la un formular automat.
              </div>
            </form>
          </Card>
        </RevealSection>
      </div>
    </div>
  );
}
