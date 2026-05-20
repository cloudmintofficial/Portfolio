import type { Metadata } from "next";
import "./globals.css";
import { outfit, spaceGrotesk, spaceMono } from "./fonts";
import GlobalLayout from "@/components/layout/GlobalLayout";

export const metadata: Metadata = {
  title: {
    default: "Cloud Mint",
    template: "%s | Cloud Mint",
  },
  description: "A collective of innovative minds pushing the boundaries of design, engineering, and digital experiences.",
  openGraph: {
    title: "Cloud Mint",
    description: "A collective of innovative minds pushing the boundaries of design, engineering, and digital experiences.",
    url: "https://cloudmint.in",
    siteName: "Cloud Mint",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Mint",
    description: "A collective of innovative minds pushing the boundaries of design, engineering, and digital experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="scanlines" suppressHydrationWarning>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
