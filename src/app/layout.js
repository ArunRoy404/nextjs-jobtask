import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar/Navbar";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import Footer from "./components/Footer/Footer";
import ToasterProvider from "./components/ToasterProvider/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GadgetSphere",
  description: "Discover the latest tech trends, compare products, and shop with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToasterProvider />
        <NextAuthSessionProvider>
          <div className="min-h-screen w-full relative">
            {/* Cosmic Noise */}
            <div
              className="absolute inset-0 -z-10 bg-cosmic-noise"
            />
            <Navbar />
            <div className="min-h-[calc(100vh-322px)]">
              {children}
            </div>
            <Footer />
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
