import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VFriend | Offline Timetable App for VIT Students",
  description:
    "VFriend is a fully offline app for VIT students that shows when your friends are free and where they are, no calls, no texts, no internet",
  keywords:
    "VFriend, offline app, friends timetable, student schedule app, college timetable sharing, free time finder, offline timetable, no internet app, student productivity tool, find free friends, campus life app, timetable manager, study group planner, meet friends easily, offline schedule manager, VFriend VIT chennai, VFriend app",
  icons: [
    { rel: "icon", url: "/app_icon.png", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/app_icon.png" }
  ],
  appleWebApp: {
    title: "VFriend",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-splash-2048-2732.png",
        media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      }
    ]
  },
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}