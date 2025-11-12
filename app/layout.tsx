import type { Metadata } from "next";
import { Lato, Cardo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const lato = Lato({
  variable: "--font-primary",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const cardo = Cardo({
  variable: "--font-secondary",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BROOKS MM INTERNATIONAL",
  description: "World-class fabrics and fashion blending tradition with modern trends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${lato.variable} ${cardo.variable} font-primary bg-bgwhite-100 text-textblack-100 antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}