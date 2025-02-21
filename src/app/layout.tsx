import type { Metadata } from "next";
import "../styles/_globals.scss";
import localFont from "next/font/local";
import Header from "./ui/shared/header/header";
import Footer from "./ui/shared/footer/footer";

const futura = localFont({
  src: "../fonts/FuturaEFCE-Medium.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Readit",
  description: "Readit - a bookstore app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={futura.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
