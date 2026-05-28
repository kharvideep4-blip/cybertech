import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Cybertech Data Engineers",
  description: "Digital Infrastructure & Data Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}