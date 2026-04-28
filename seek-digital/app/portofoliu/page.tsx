import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";

export const metadata: Metadata = {
  title: "Portofoliu",
  description:
    "Vezi proiectele și studiile de caz SEEK DIGITAL, cu exemple de website-uri, branding și campanii.",
  alternates: { canonical: "/portofoliu" },
  openGraph: { images: ["/images/og-placeholder.svg"] },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PortfolioPage />;
}
