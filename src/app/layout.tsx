import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Electrocity",
  description:
    "Интернет-магазин техники Electrocity предлагает широкий ассортимент выбора товаров: пк, ноутбуки, смартфоны, смарт-часы и многое другое",
  keywords: ["пк", "персональный компьютер", "ноутбук", "смартфон", "телефон", "часы", "смарт-часы", "техника", "умные устройства", "гаджеты"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>{children}</body>
    </html>
  );
}
