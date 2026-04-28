import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Descoperă serviciile SEEK DIGITAL: website-uri, e-commerce, reclame, branding și automatizări pentru IMM-uri.",
  alternates: { canonical: "/servicii" },
  openGraph: { images: ["/images/og-placeholder.svg"] },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ServicesPage />;
}
