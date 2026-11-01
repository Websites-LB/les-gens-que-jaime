import type { Metadata, Viewport } from "next";
import { Marcellus, Montserrat } from "next/font/google";

import { Motion } from "@/components/motion";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { TIME_SCRIPT } from "@/lib/site";

import "./globals.css";

// Open stand-ins for the menu's licensed Arnika and Gotham.
const display = Marcellus({ variable: "--font-marcellus", subsets: ["latin"], weight: "400" });
const body = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Les gens que j'aime, bistro bar in the Old Souk of Byblos",
  description: "Pour les sourires, les moments et les gens que j'aime. Breakfast, bistro plates and cocktails in the Old Souk of Byblos, every day from 10:00.",
};

export const viewport: Viewport = {
  themeColor: "#1a3525",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: TIME_SCRIPT }} />
      </head>
      <body>
        <SmoothScroll>
          <SiteHeader />
          <main>{children}</main>
          <Motion />
        </SmoothScroll>
      </body>
    </html>
  );
}
