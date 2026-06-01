import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hi-claire.github.io"),
  title: "Claire Kim | Frontend Developer",
  description:
    "결제·인증·최적화를 설계하고, 팀과 먼저 소통하는 3년차 프론트엔드 개발자 김규연의 포트폴리오입니다.",
  openGraph: {
    title: "Claire Kim | Frontend Developer",
    description:
      "결제·인증·최적화를 설계하고, 팀과 먼저 소통하는 3년차 프론트엔드 개발자 김규연의 포트폴리오입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
