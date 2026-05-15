import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Mint",
  description: "A collective of innovative minds pushing the boundaries of design, engineering, and digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scanlines">
        {children}
      </body>
    </html>
  );
}
