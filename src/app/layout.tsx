import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers/provider";
import Header from "../components/UI/header";
import { siteConfig } from "../config/site.config";
import Hero from "../components/UI/hero";
import Footer from "../components/UI/footer";
import { layoutConfig } from "../config/layout.config";
import Title from "../components/UI/title";

const OpenSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${OpenSans.variable}  antialiased`}>
        <Providers>
          <Header />
          <Hero />
          <main
            className={`bg-white flex flex-col  mx-auto mb-[50] px-[40px] justify-center items-center max-w-[1024]`}
          >
            <Title />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
