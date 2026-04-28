import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";

export const metadata: Metadata = {
  title: "Pachete",
  description:
    "Compară pachetele SEEK DIGITAL pentru lansări rapide, proiecte de creștere și colaborări lunare.",
  alternates: { canonical: "/pachete" },
  openGraph: { images: ["/images/og-placeholder.svg"] },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PricingPage />;
}
