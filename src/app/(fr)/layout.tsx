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
  title: "Antoine Andrieu — Product engineer, CTO hands-on & founding engineer",
  description:
    "15 ans d'ingénierie : digitalisation des opérations (Odoo), architecture et développement full-stack, data (PostgreSQL), agents IA. Disponible en freelance, CTO fractionné ou founding engineer.",
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/en",
      "x-default": "/",
    },
  },
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

// Auto-switch: first visit, English browser, no manual choice stored -> /en.
const langDetect = `try{if(!localStorage.getItem("aa-lang")&&/^en/i.test(navigator.language))location.replace("/en")}catch(e){}`;

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
        <script dangerouslySetInnerHTML={{ __html: langDetect }} />
        {children}
      </body>
    </html>
  );
}
