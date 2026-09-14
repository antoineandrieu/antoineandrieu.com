import type { Metadata } from "next";
import { League_Spartan, Lato } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Antoine Andrieu — Full-Stack Engineer & Entrepreneur",
  description:
    "Data Engineer @Mycophyto | Systems Architect | Full-Stack Developer. I turn business vision into real, high-impact products.",
  openGraph: {
    title: "Antoine Andrieu — Full-Stack Engineer & Entrepreneur",
    description:
      "Data Engineer @Mycophyto | Systems Architect | Full-Stack Developer.",
    url: "https://antoineandrieu.com",
    siteName: "Antoine Andrieu",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${leagueSpartan.variable} ${lato.variable} antialiased bg-[#050410] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
