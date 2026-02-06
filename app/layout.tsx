import "./globals.css";
import type { Metadata } from "next";
import RootProvider from "@/provider/RootProvider";
import HeaderLayout from "@/layout/HeaderLayout";
import FooterLayout from "@/layout/FooterLayout";

export const metadata: Metadata = {
  title: "App",
  description: "Your application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased w-full min-h-dvh bg-background text-foreground">
        <RootProvider>
          <HeaderLayout />
          {children}
          <FooterLayout />
        </RootProvider>
      </body>
    </html>
  );
}
