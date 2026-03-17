import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelompok 1 — Praktikum RSI",
  description:
    "Penugasan Git dan Version Control · Praktikum Rekayasa Sistem Informasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}