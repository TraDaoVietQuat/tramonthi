import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TramOnThi – Nền tảng học trực tuyến THPT & Đại học",
  description:
    "TramOnThi cung cấp khóa học Tiếng Anh, Toán, Lý, Hóa, ôn thi THPT Quốc gia và Phương pháp NCKH dành cho học sinh và sinh viên Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
