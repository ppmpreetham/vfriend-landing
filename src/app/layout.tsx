import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VFriend",
  description:
    "A Fully Offline app that helps you find which of your friends are free at any given point of time",
  keywords:
    "vfriend, app, college app, timetable app, friends app, offline app",
  icons: [{ rel: "icon", url: "/app_icon.png", type: "image/svg+xml" }],
  openGraph: {
    url: "https://vfriend.preetham.top",
    type: "website",
    title: "VFriend",
    description:
      "A Fully Offline app that helps you find which of your friends are free at any given point of time",
    images: [
      "https://opengraph.b-cdn.net/production/images/05dd8b9f-81c2-468e-89f8-0d255cb18ded.jpg?token=fSN-q0CaWR3dAwe9eGsUfTr0XUHmUd8hO4lFTDg4oLs&height=600&width=1200&expires=33290121823",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VFriend",
    description:
      "A Fully Offline app that helps you find which of your friends are free at any given point of time",
    images: [
      "https://opengraph.b-cdn.net/production/images/05dd8b9f-81c2-468e-89f8-0d255cb18ded.jpg?token=fSN-q0CaWR3dAwe9eGsUfTr0XUHmUd8hO4lFTDg4oLs&height=600&width=1200&expires=33290121823",
    ],
    site: "vfriend.preetham.top",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/app_icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="vfriend, app, college app, timetable app, friends app, offline app" />
        <meta name="rating" content="general" />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://vfriend.preetham.top" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VFriend" />
        <meta property="og:description" content="A Fully Offline app that helps you find which of your friends are free at any given point of time" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/05dd8b9f-81c2-468e-89f8-0d255cb18ded.jpg?token=fSN-q0CaWR3dAwe9eGsUfTr0XUHmUd8hO4lFTDg4oLs&height=600&width=1200&expires=33290121823" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vfriend.preetham.top" />
        <meta property="twitter:url" content="https://vfriend.preetham.top" />
        <meta name="twitter:title" content="VFriend" />
        <meta name="twitter:description" content="A Fully Offline app that helps you find which of your friends are free at any given point of time" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/05dd8b9f-81c2-468e-89f8-0d255cb18ded.jpg?token=fSN-q0CaWR3dAwe9eGsUfTr0XUHmUd8hO4lFTDg4oLs&height=600&width=1200&expires=33290121823" />
        {/* Translation Preventions */}
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script>
        <title>VFriend</title>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
