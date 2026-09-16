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
    "From business problem to a system in production: I work out how a company actually runs, decide what is worth building, then build and operate it. 15 years of engineering, 5 of them in early-stage.",
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
      "I show up before the specs: understand the business, decide what to build, then ship the system to production. Freelance, fractional CTO or founding engineer.",
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
