"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-primary text-primary width-full`}
      >
        <NavBar />
        <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
