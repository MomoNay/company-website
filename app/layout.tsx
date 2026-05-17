import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbit Drops LLC — We Build Apps. We Scale Companies.",
  description:
    "Orbit Drops turns your boldest ideas into high-performance products and keeps them growing. App development, growth strategy, and scaling infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
