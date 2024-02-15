import type { Metadata } from "next";
import {Cinzel} from "next/font/google";
import React from "react";
import localFont from 'next/font/local';
import "@/styles/globals.css";
import Header from "@/components/Header";

const cinzelFont = Cinzel({
  variable: '--cinzel-font',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const clashDisplayFont = localFont({
  variable: '--clash-display-font',
  display: 'swap',
  src: [
    {
      path: 'fonts/ClashDisplay-Variable.ttf',
      weight: 'variable',
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplayFont.variable} ${cinzelFont.variable}`}>
      <Header/>
        {children}
      </body>
    </html>
  );
}
