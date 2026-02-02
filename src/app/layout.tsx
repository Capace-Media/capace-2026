import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import { cn } from "@/lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";
import dayjs from "dayjs";
import "dayjs/locale/sv";
import AnnouncementBannerWrapper from "@/components/announcement-banner/announcement-banner-wrapper";
import ExitDraftButton from "@/components/layout/exit-draft-button";
import { env } from "@/env";
dayjs.locale("sv");

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
    <html lang="sv" className={cn(poppins.className, caveat.variable)}>
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
      <head>
        <meta name="apple-mobile-web-app-title" content="Capace" />
      </head>
      <body className="mx-auto flex min-h-screen max-w-400 flex-col">
        <AnnouncementBannerWrapper />
        <Header />
        <main className="bg-background z-1 flex-1 rounded-bl-[100px] transition-all duration-300">
          {children}
        </main>
        <ExitDraftButton />
        <Footer />
      </body>
    </html>
  );
}
