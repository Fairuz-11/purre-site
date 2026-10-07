import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ============================================
   Fonts
   ============================================ */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

/* ============================================
   Metadata
   ============================================ */
export const metadata: Metadata = {
  title: "PUREE — Construction & Design",
  description:
    "PUREE menyediakan solusi konstruksi, renovasi, arsitektur, dan interior dengan pendekatan profesional dan berkualitas.",
  metadataBase: new URL("https://puree.co.id"),
  openGraph: {
    title: "PUREE — Construction & Design",
    description:
      "PUREE menyediakan solusi konstruksi, renovasi, arsitektur, dan interior dengan pendekatan profesional dan berkualitas.",
    siteName: "PUREE",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ============================================
   Root Layout
   ============================================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${barlow.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
