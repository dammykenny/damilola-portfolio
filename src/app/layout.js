import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/layout/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  alternates: { canonical: "/" },
  title: "Damilola Ayoola | Software Engineer · Data & Automation",
  description:
    "Damilola Ayoola is a software engineer building reliable systems for complex data, financial workflows, automation, and analytical problems.",
  keywords: [
    "Damilola Ayoola",
    "Software Engineer",
    "Data Automation",
    "Python",
    "React",
    "Next.js",
    "Financial Data",
    "Quantitative Engineering",
  ],
  authors: [{ name: "Damilola Ayoola" }],
  creator: "Damilola Ayoola",
  openGraph: {
    title: "Damilola Ayoola | Software Engineer · Data & Automation",
    description:
      "Software, data, automation, and analytical systems built around real operational problems.",
    type: "website",
    locale: "en_NG",
    siteName: "Damilola Ayoola",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damilola Ayoola | Software Engineer · Data & Automation",
    description:
      "Software, data, automation, and analytical systems built around real operational problems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
