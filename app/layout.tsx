import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolioamjadkhan.netlify.app"),

  title: "Amjad Khan | Software Engineer",
  description:
    "Software Engineer & Performance Marketer based in Islamabad, Pakistan. Flutter & React Native apps, Next.js storefronts and a Laravel + FastAPI multi-tenant e-commerce SaaS. 10+ live apps, 8 Next.js storefronts and $2M+ client revenue through performance marketing.",

  keywords: [
    "Software Engineer",
    "Flutter Developer",
    "React Native Developer",
    "Next.js Developer",
    "Laravel Developer",
    "FastAPI",
    "Multi-tenant SaaS",
    "E-Commerce Developer",
    "Meta Ads",
    "TikTok Ads",
    "Digital Marketing",
    "Islamabad",
    "Pakistan",
    "Mobile Developer",
    "Dart",
    "Firebase",
  ],

  authors: [{ name: "Amjad Khan" }],

  alternates: {
    canonical: "https://portfolioamjadkhan.netlify.app",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    title: "Amjad Khan | Software Engineer",
    description:
      "Software Engineer & Performance Marketer. Flutter, React Native, Next.js, Laravel + FastAPI. 10+ live apps, 8 storefronts and $2M+ client revenue.",
    type: "website",
    url: "https://portfolioamjadkhan.netlify.app",
  //  images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Amjad Khan — Software Engineer Portfolio" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amjad Khan | Software Engineer",
    description:
      "Software Engineer & Performance Marketer. Flutter, React Native, Next.js, Laravel + FastAPI. 10+ live apps, 8 storefronts and $2M+ client revenue.",
    //images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}