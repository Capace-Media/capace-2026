import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={cn(poppins.className)}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
