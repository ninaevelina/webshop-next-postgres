import type { Metadata } from "next";
import "../styles/_globals.scss";
import localFont from "next/font/local";

const futura = localFont({
  src: "../fonts/FuturaEFCE-Medium.woff2",
  display: "swap",
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
      <body className={futura.className}>{children}</body>
    </html>
  );
}