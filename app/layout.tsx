import type { Metadata } from "next";
// import { Manrope } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import Footer from "@/components/ui/footer";
import Dragon from "@/components/ui/dragon/dragon";
import Navbar from "@/components/ui/navbar";
import site from "@/config/site";
import SearchModal from "@/components/modals/search";
// import Banner from "@/components/ui/banner/banner";

// const manrope = Manrope({ subsets: ["latin"] });

const BASE_URL = site.url;

export const metadata: Metadata = {
  title: {
    default: "NEAR Catalog - Explore NEAR Projects",
    template: "%s - NEAR Catalog",
  },
  description:
    "NEAR Catalog is an ecosystem directory for NEAR Protocol, showcasing NEAR projects, teams, people and contributors.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: './'
  },
  keywords: [
    "NEAR",
    "NEAR Protocol",
    "NEAR Catalog",
    "NEAR Projects",
    "NEAR Ecosystem",
    "NEAR Community",
    "NEAR People",
    ],
  authors: [
    {
      name: "NEAR Catalog",
      url: BASE_URL,
    },
  ],
  creator: "@near",
  manifest: "/manifest.webmanifest"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={` min-h-screen bg-black font-sans antialiased`}
      >
        <div className="bg-background relative flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <SearchModal />
          <Footer />
          <Dragon/>
        </div>
      </body>
    </html>
  );
}
