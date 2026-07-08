import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, Almarai, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const displaySans = Plus_Jakarta_Sans({
  variable: "--font-display-sans",
  subsets: ["vietnamese", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const almarai = Almarai({
  variable: "--font-almarai",
  weight: ["300", "400", "700", "800"],
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
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
      className={`${displaySans.variable} ${geistMono.variable} ${almarai.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
