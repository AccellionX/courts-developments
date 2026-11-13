import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit, Syne } from "next/font/google";
import { ConceptNotice } from "@/components/ConceptNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.demoTitle,
    template: `%s | ${site.companyName} Concept`,
  },
  description:
    "An independent AccellionX website redesign concept for Court Developments — a futuristic take on premium British residential development.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: site.demoTitle,
    description:
      "Independent redesign concept by AccellionX. Not an official Court Developments website.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${outfit.variable} ${syne.variable} ${plexMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ConceptNotice />
        <Header />
        <main className="page-shell flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
