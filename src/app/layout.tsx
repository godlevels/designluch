import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DESIGNLUNCH Landing Page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={(dmSans.className, "antialiased bg-[#141718]")}>
        {children}
      </body>
    </html>
  );
}
