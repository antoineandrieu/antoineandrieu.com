import type { Metadata } from "next";
import { Big_Shoulders, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Antoine Andrieu — Product engineer, CTO hands-on & founding engineer",
  description:
    "12 ans d'ingénierie : digitalisation des opérations (Odoo), architecture et développement full-stack, data (PostgreSQL), agents IA. Disponible en freelance, CTO fractionné ou founding engineer.",
  openGraph: {
    title: "Antoine Andrieu — Product engineer, CTO hands-on & founding engineer",
    description:
      "Je discute le besoin, j'arbitre ce qui mérite d'être construit, puis je livre moi-même. Odoo, PostgreSQL, agents IA.",
    url: "https://antoineandrieu.com",
    siteName: "Antoine Andrieu",
    locale: "fr_FR",
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
    <html lang="fr">
      <body
        className={`${bigShoulders.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
