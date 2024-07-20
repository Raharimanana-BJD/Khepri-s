import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "../components";
import { cn } from "../lib/utils";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krepri-Service",
  description: "Khepri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-[100dvh] bg-grey-100 antialiased font-sans]",inter.className)}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
