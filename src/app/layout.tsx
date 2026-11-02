import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "IEEE GU SB | IEEE Galgotias University Student Branch",
  description:
    "Official website of IEEE Galgotias University Student Branch (STB99158). Hosts of ICCSAI 2026 conference. Advancing Technology for Humanity.",
  keywords: [
    "IEEE GU SB",
    "Galgotias University",
    "IEEE Student Branch",
    "ICCSAI 2026",
    "IEEE UP Section",
    "IEEE Conference 2026",
    "Engineering Workshops",
    "Hackathons",
  ],
  authors: [{ name: "IEEE GU SB Web Team" }],
  openGraph: {
    title: "IEEE GU SB | IEEE Galgotias University Student Branch",
    description:
      "Advancing Technology for Humanity at Galgotias University. Technical workshops, hackathons, and host of ICCSAI 2026.",
    url: "https://ieeegusb.galgotiasuniversity.edu.in",
    siteName: "IEEE GU SB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#060911] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-purple-600 selection:text-white">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
