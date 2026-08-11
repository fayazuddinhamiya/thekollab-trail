import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TheKollab — Services Grid",
  description:
    "Web3 and crypto marketing services block, built as a Payload-ready Next.js block.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
