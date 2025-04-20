import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

// Get the measurement ID from environment variables
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export const metadata: Metadata = {
  title: "Surya Basak",
  description: "I'm Surya, a software developer specializing in mobile and web development with over four years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        {children}
        {/* Add Google Analytics */}
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
