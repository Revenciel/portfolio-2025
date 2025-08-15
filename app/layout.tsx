import type { Metadata } from "next";
import localFont from 'next/font/local';

import "./styles.scss";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

const nicolatte = localFont({
  src: './fonts/Nicolatte-Regular.woff2',
  weight: '400',
  style: 'normal',
  variable: '--f-nicolatte',
})

const meltmino = localFont({
  src: [
    {
      path: './fonts/Meltmino-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Meltmino-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Meltmino-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Meltmino-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--f-meltmino',
})

const atkins = localFont({
  src: [
    {
      path: './fonts/AtkinsonHyperlegibleNext-Regular.woff2',
      weight: '400 700',
      style: 'normal',
    },
    {
      path: './fonts/AtkinsonHyperlegibleNext-Italic.woff2',
      weight: '400 700',
      style: 'italic',
    },
  ],
  variable: '--f-atkins',
})

export const metadata: Metadata = {
  title: "Senior UX & Product Designer - Design Systems, Front-End Dev & UX Research | Clarkybox Design",
  description: "Experienced Senior UX/Product Designer specializing in design systems, UX research, and front-end development (React, Next.js). Former Red Hat UX research lead and start-up design lead, with proven success delivering AI-driven, SaaS, B2B, and marketing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nicolatte.variable} ${meltmino.variable} ${atkins.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
