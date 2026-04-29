import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/common/CustomCursor";
import GrainOverlay from "@/components/common/GrainOverlay";
import { Toaster } from "@/components/ui/toast";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://devbysilviu.ro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SEEK DIGITAL | Digitalizăm afacerea ta.",
    template: "SEEK DIGITAL | %s",
  },
  description:
    "SEEK DIGITAL este o boutique agency din Iași care creează website-uri, branding, campanii și automatizări pentru IMM-uri.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SEEK DIGITAL | Digitalizăm afacerea ta.",
    description:
      "Website-uri profesionale, marketing și automatizări pentru afaceri din România.",
    url: siteUrl,
    siteName: "SEEK DIGITAL",
    images: [
      {
        url: "/images/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "SEEK DIGITAL",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${syne.variable} ${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-background text-foreground selection:bg-accent selection:text-black">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
          <GrainOverlay />
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main className="relative z-10 flex-1">{children}</main>
          </PageTransition>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
