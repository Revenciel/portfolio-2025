import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";


export const metadata: Metadata = {
  title: "Clarkybox Design",
  description: "UX & Product Design based out of Asheville, NC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
