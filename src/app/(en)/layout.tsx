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
  title: "Antoine Andrieu — Software engineer & Product Engineer",
  description:
    "Software engineer and Product Engineer: I turn complex business problems into reliable products, from idea to production.",
  alternates: {
    canonical: "/en",
    languages: {
      fr: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Antoine Andrieu — Software engineer & Product Engineer",
    description:
      "I turn complex business problems into reliable products: scoping, architecture, development and production.",
    url: "https://antoineandrieu.com/en",
    siteName: "Antoine Andrieu",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Antoine Andrieu — Software engineer & Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine Andrieu — Software engineer & Product Engineer",
    description:
      "I turn complex business problems into reliable products, from idea to production.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
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
        <script defer src="/temps.min.js" />
        {children}
      </body>
    </html>
  );
}
