import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SYED ABDUL RAFAY— Portfolio",
  description: "Designer/Developer Portfolio and Resume",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      {/* Prevent theme flash on first paint */}
      {/* <Script id="theme-init" strategy="beforeInteractive">{`
        (function(){
          try {
            var saved = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            var theme = saved || (prefersDark ? 'dark' : 'light');
            document.documentElement.setAttribute('data-theme', theme);
          } catch (e) {}
        })();
      `}</Script> */}
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}