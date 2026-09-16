import type { Metadata } from "next";
import { Big_Shoulders, Inter } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="fr">
      <body
        className={`${bigShoulders.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
