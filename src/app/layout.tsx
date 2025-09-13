import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Import Poppins
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 2. Configure Poppins (replacing Inter)
// We load multiple weights to ensure the site has flexibility
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap", // Ensures fast font display
  variable: "--font-poppins", // Optional, but good practice
});

export const metadata: Metadata = {
  title: "Rahman Group - Corporate Portfolio",
  description: "The official corporate portfolio for the Rahman Group of businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white text-zinc-900 antialiased">
      {/* 3. Apply the font className to the body */}
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}