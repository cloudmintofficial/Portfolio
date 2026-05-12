import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEAM CLOUNDMINT | Portfolio",
  description: "A cutting-edge team portfolio showcasing our collective vision",
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