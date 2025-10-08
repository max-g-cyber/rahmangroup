import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  // UPDATE: Using the full company name
  title: "Rahman Group of Companies Ltd. - Corporate Portfolio",
  description: "The official corporate portfolio for the Rahman Group of Companies Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // UPDATE: Applying the new background and text colors
    <html lang="en" className="bg-theme-background text-theme-text antialiased">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}