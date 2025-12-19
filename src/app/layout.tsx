import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/OtherComponents/ScrollToTop";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Agro Deluxe Growers | HORECA Produce Supplier in Mumbai & Navi Mumbai",
    template: "%s | Agro Deluxe Growers",
  },

  description:
    "Agro Deluxe Growers is a Mumbai & Navi Mumbai based B2B supplier of exotic and imported fruits and vegetables for hotels, restaurants, and catering businesses with reliable farm-to-kitchen delivery.",

  keywords: [
    "Agro Deluxe Growers",
    "HORECA produce supplier Mumbai",
    "HORECA produce supplier Navi Mumbai",
    "B2B vegetable supplier Mumbai",
    "exotic vegetables supplier Mumbai",
    "imported fruits supplier Mumbai",
    "hotel restaurant supplier Mumbai",
    "farm to kitchen produce Mumbai",
    "premium produce supplier Navi Mumbai",
  ],

  alternates: {
    canonical: "https://www.agrodeluxegrowers.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Agro Deluxe Growers | Premium Produce Supplier in Mumbai & Navi Mumbai",
    description:
      "Direct-from-farm and imported premium produce supplier for hotels, restaurants, and culinary facilities across Mumbai and Navi Mumbai.",
    url: "https://www.agrodeluxegrowers.com",
    siteName: "Agro Deluxe Growers",
    images: [
      {
        url: "https://www.agrodeluxegrowers.com/LaunchPageImages/Avocado.webp",
        width: 1200,
        height: 630,
        alt: "Fresh exotic produce supplier for HORECA in Mumbai and Navi Mumbai",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Agro Deluxe Growers | Mumbai HORECA Produce Supplier",
    description:
      "Premium exotic and imported produce supplier for hotels, restaurants, and catering businesses in Mumbai & Navi Mumbai.",
    images: ["https://www.agrodeluxegrowers.com/LaunchPageImages/Avocado.webp"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ScrollToTop />
        <Navbar />
        <MobileNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
