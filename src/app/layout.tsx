import type { Metadata } from "next";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import BentoGrid from "@/components/Home/BentoGridHome";
import RouteTransition from "@/components/Layout/RouteTransition";

export const metadata: Metadata = {
  title: "Rifqi Ziyad Imtinan",
  description: "Im Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuroraBackground>
          <BentoGrid>
            {/* <RouteTransition> */}
            {children}
            {/* </RouteTransition> */}
          </BentoGrid>
        </AuroraBackground>
      </body>
    </html>
  );
}
