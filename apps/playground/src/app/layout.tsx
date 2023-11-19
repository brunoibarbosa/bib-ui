import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeClient from "./ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playground - bibUI",
  description: "Criado por Bruno Barbosa",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <ThemeClient>{children}</ThemeClient>
    </html>
  );
}
