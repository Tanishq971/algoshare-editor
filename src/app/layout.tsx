import type { Metadata } from "next";
import localFont from "next/font/local";
import { Press_Start_2P } from "next/font/google";
import Footer from "@/components/providers/Footer";
import "./globals.css";

import ConvexClientProvider from "../../convex/components/providers/ConvexClientProvider";


const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable:"--font-press-start"
});



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "algoshare",
  description: "A coding community plateform meant for coders ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <html lang="en">
      <body
          className={`${pressStart2P.variable} ${geistSans.variable} ${geistMono.variable} 
                      antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 
                      text-gray-100 flex flex-col`}
        >
          {children}
          <Footer/>
        </body>
      </html>
    </ConvexClientProvider>
  );
  // shscjksblksbcisbjcls
  // jsdbcjsbv;lsakbnc;askc
  /// xc nsdljb jb ldj nd bdl
}
