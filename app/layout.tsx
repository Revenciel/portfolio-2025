import type { Metadata } from "next";

import "./globals.scss";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

import { Fira_Mono } from 'next/font/google'
import { Fira_Sans } from 'next/font/google'
 
const fira_mono = Fira_Mono({
  weight: ['500','700'],
  subsets: ['latin'],
  variable:'--f-fira-mono',
})

const fira_sans = Fira_Sans({
  weight: ['300','400','700'],
  subsets: ['latin'],
  style: ['italic','normal'],
  variable: '--f-fira-sans',
})

export const metadata: Metadata = {
  title: "Clarkybox Design",
  description: "UX & Product Design. Based out of Asheville, NC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_mono.variable} ${fira_sans.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
