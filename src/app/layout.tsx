import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "minder",
  description: "The minder bot: for what's worth remembering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <body className="antialiased">{children}</body>
    </html>
  );
}
