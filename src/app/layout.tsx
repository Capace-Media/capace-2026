import Footer from "@/components/layout/footer";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

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
    <html lang="en" className={`${geist.variable}`}>
      <body>
        {children} <Footer />
      </body>
    </html>
  );
}
