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
  title: "Kaelen Voss | Visual Artist, Animator & Vibe Coder",
  description: "Portfolio of Kaelen Voss, a multidisciplinary designer, 3D animator, motion graphic artist, and vibe coder crafting immersive digital experiences and music visualizers.",
  keywords: [
    "Kaelen Voss",
    "Portfolio",
    "Graphic Design",
    "Motion Graphics",
    "3D Animation",
    "Vibe Coding",
    "Creative Coding",
    "Album Cover Art",
    "Music Visualizer",
    "Freelancer"
  ],
  authors: [{ name: "Kaelen Voss" }],
  openGraph: {
    title: "Kaelen Voss | Visual Artist & Vibe Coder",
    description: "Multidisciplinary portfolio showcasing 3D renders, kinetic motion graphics, generative canvas coding, and cover art visualizers.",
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
