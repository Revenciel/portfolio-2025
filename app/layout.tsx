import type { Metadata } from "next";
import localFont from 'next/font/local';

import "./styles.scss";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

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

const nicolatte = localFont({
  src: './fonts/Nicolatte-Regular.woff2',
  weight: '400',
  style: 'normal',
  variable: '--f-nicolatte',
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
      <body className={`${nicolatte.variable} ${meltmino.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
