import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar/Navbar";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";

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
        <NextAuthSessionProvider>
          <div className="min-h-screen w-full relative">
            {/* Cosmic Noise */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)",
                backgroundAttachment: 'fixed'
              }}
            />
            <Toaster toastOptions={{
              style: {
                zIndex: 99999999
              },
            }}></Toaster>
            <Navbar />
            {children}
            <Footer/>
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
