import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";

import "@/styles/tokens.css";
import "./globals.css";

/* Stand-ins for four unlicensed commercial faces — see README. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TheKollab — Services Grid",
  description:
    "Web3 and crypto marketing services block, built as a Payload-ready Next.js block.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
