"use client";
import "./globals.css";

import { Providers } from "./providers";
import localFont from "next/font/local";
import type { Metadata } from "next";
import useThemeStore from "@/zustans/store";

const metadata: Metadata = {
  title: "Next Starter App",
  description: "This is Next Practice App",
};

// Font files can be colocated inside of `app`
const myFont = localFont({
  display: "swap",
  src: [
    {
      path: "../public/font/vazir/Vazir-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/vazir/Vazir-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/vazir/Vazir-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/vazir/Vazir.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/vazir/Vazir-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const theme = useThemeStore((state: any) => state.theme);

  return (
    <html lang="fa">
      <body className={myFont.className}>
        <Providers>
          <main
            dir="rtl"
            className={`${theme} text-foreground bg-background`}
          >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
