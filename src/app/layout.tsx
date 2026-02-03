import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "Apay Kayış | Endüstriyel Kayış ve Güç Aktarma Çözümleri",
  description: "Apay Kayış, yüksek kaliteli endüstriyel zaman kayışları, dişli kayışlar ve güç aktarma sistemleri sunar. Mühendislik çözümleri ve hızlı teknik destek.",
  keywords: ["zaman kayışları", "dişli kayışlar", "endüstriyel kayışlar", "apay kayış", "güç aktarma"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} antialiased selection:bg-apay-red selection:text-white`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
