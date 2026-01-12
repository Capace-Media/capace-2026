import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Webbyrå i Malmö - Vi hjälper ditt företag att synas | CAPACE MEDIA",
  description:
    "Webbyrå Malmö - Vi är här för att hjälpa dig tänka som en utmanare: långsiktigt, innovativt, experimentellt och resultatinriktat.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(poppins.className, caveat.variable)}>
      <body className="mx-auto flex min-h-screen max-w-400 flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
