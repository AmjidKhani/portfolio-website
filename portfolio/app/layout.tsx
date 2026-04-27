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
  title: "Amjad Khan | Senior Flutter Developer",
  description:
    "Senior Flutter Developer & Mobile Team Lead based in Islamabad, Pakistan. 10+ live apps shipped worldwide with 50,000+ total downloads across UK, Gulf & Pakistan.",
  keywords: [
    "Flutter Developer",
    "Mobile Developer",
    "Dart",
    "Android",
    "iOS",
    "Islamabad",
    "Pakistan",
    "React Native",
    "Team Lead",
  ],
  authors: [{ name: "Amjad Khan" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },  // Your SVG favicon
      { url: "/favicon.ico", sizes: "any" },           // Fallback for old browsers
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  openGraph: {
    title: "Amjad Khan | Senior Flutter Developer",
    description:
      "Senior Flutter Developer & Mobile Team Lead. 10+ live apps, 50,000+ downloads.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
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