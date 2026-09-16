import type { Metadata } from "next";
import { Big_Shoulders, Inter } from "next/font/google";
import "../globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://antoineandrieu.com"),
  title: "Antoine Andrieu — Product engineer, hands-on CTO & founding engineer",
  description:
    "15 years of engineering: operations digitalization (Odoo), full-stack architecture and development, data (PostgreSQL), AI agents. Available for freelance, fractional CTO or founding engineer roles.",
  alternates: {
    canonical: "/en",
    languages: {
      fr: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Antoine Andrieu — Product engineer, hands-on CTO & founding engineer",
    description:
      "I discuss the need, decide what is worth building, then ship it myself. Odoo, PostgreSQL, AI agents.",
    url: "https://antoineandrieu.com/en",
    siteName: "Antoine Andrieu",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icons/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bigShoulders.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
