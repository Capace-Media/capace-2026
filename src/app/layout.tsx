import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Webbyrå i Malmö - Vi hjälper ditt företag att synas | CAPACE MEDIA",
  description:
    "Webbyrå Malmö - Vi är här för att hjälpa dig tänka som en utmanare: långsiktigt, innovativt, experimentellt och resultatinriktat.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(geist.variable, inter.variable)}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
