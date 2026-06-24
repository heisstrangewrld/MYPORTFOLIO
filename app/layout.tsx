import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steven Ebuka Anyadike | Creative Director, Brand Designer & Web Developer",
  description: "Portfolio of Steven Ebuka Anyadike, a Creative Director, Brand Designer, UI/UX Designer, and AI-assisted Web Developer building premium digital and brand experiences.",
  keywords: [
    "Steven Ebuka Anyadike",
    "Steven Anyadike",
    "Creative Director",
    "Brand Designer",
    "UI/UX Designer",
    "AI-Assisted Web Developer",
    "Portfolio",
    "Brand Identity",
    "Web Development",
    "Figma",
    "Blender",
    "CapCut",
    "Crova Ltd"
  ],
  authors: [{ name: "Steven Ebuka Anyadike" }],
  openGraph: {
    title: "Steven Ebuka Anyadike | Creative Director, Brand Designer & Web Developer",
    description: "Portfolio of Steven Ebuka Anyadike, creative director and developer, showcasing brand designs, UI/UX platforms, and high-quality web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-gray-100 font-sans selection:bg-brand-purple/30 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
