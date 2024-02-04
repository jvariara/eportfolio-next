import { Inter } from "next/font/google";
import "./globals.css";
import { cn, constructMetaData } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetaData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark scroll-smooth">
      <body
        className={cn(
          "relative h-full font-sans antialiased bg-background",
          inter.className,
          "theme-red"
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
