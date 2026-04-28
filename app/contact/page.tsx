import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează SEEK DIGITAL pentru o ofertă gratuită și o analiză a prezenței tale online.",
  alternates: { canonical: "/contact" },
  openGraph: { images: ["/images/og-placeholder.svg"] },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ContactPage />;
}
