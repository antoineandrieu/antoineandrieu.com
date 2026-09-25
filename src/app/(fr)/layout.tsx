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
  title: "Antoine Andrieu — Ingénieur logiciel & Product Engineer",
  description:
    "Ingénieur logiciel et Product Engineer : je transforme des problèmes métier complexes en produits fiables, de l'idée à la production.",
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Antoine Andrieu — Ingénieur logiciel & Product Engineer",
    description:
      "Je transforme des problèmes métier complexes en produits fiables : cadrage, architecture, développement et mise en production.",
    url: "https://antoineandrieu.com",
    siteName: "Antoine Andrieu",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Antoine Andrieu — Ingénieur logiciel & Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine Andrieu — Ingénieur logiciel & Product Engineer",
    description:
      "Je transforme des problèmes métier complexes en produits fiables, de l'idée à la production.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
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
        <script defer src="/temps.min.js" />
        {children}
      </body>
    </html>
  );
}
