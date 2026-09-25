import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://kettynerita.dev"; // [UPDATE once the site has a real domain]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name}, Software Developer, Full-Stack Developer, QA & Software Testing`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Ngwinkem Ketty Nerita, a Computer Engineering graduate based in Edmonton, Alberta, building full-stack applications with Next.js and testing them through manual and automated QA with Selenium, Java, and CI/CD.",
  keywords: [
    "Ngwinkem Ketty Nerita",
    "Software Developer",
    "Full-Stack Developer",
    "QA Engineer",
    "Software Testing",
    "Selenium",
    "Next.js Developer",
    "Edmonton software developer",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name}, Software Developer, Full-Stack Developer, QA & Software Testing`,
    description:
      "Full-stack applications built with Next.js, tested through manual and automated QA with Selenium, Java, and CI/CD.",
    url: siteUrl,
    siteName: profile.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name}, Software Developer & QA Engineer`,
    description:
      "Full-stack applications built with Next.js, tested through manual and automated QA.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
