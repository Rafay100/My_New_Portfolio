import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syed Abdul Rafay - AI Engineer & Full Stack Developer",
  description: "AI Engineer specializing in intelligent automation, autonomous agents, and full-stack development. Building production-ready AI solutions with Python, LangChain, OpenAI, React, and Next.js. Available for freelance projects and consulting.",
  keywords: ["AI Engineer", "Full Stack Developer", "AI Automation", "LangChain", "OpenAI", "Python Developer", "React Developer", "Next.js", "Machine Learning", "AI Agents", "Freelance Developer"],
  authors: [{ name: "Syed Abdul Rafay" }],
  openGraph: {
    title: "Syed Abdul Rafay - AI Engineer & Full Stack Developer",
    description: "Building intelligent systems that transform businesses. Specializing in AI automation, autonomous agents, and full-stack development.",
    url: "https://github.com/Rafay100",
    siteName: "Syed Abdul Rafay Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Abdul Rafay - AI Engineer & Full Stack Developer",
    description: "Building intelligent systems that transform businesses. AI automation, autonomous agents, and full-stack development.",
  },
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