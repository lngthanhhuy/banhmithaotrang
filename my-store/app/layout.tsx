import type { Metadata } from "next";
import {
  Be_Vietnam_Pro,
  Freeman,
  Playfair_Display,
} from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const freeman = Freeman({
  variable: "--font-freeman",
  subsets: ["latin", "vietnamese"],
  weight: "400",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bánh Mì Thảo Trang",
    template: "%s | Bánh Mì Thảo Trang",
  },
  description:
    "Bánh mì truyền thống từ lò bánh gia đình 20 năm, phục vụ khách lẻ, trường học, doanh nghiệp và sự kiện.",
  keywords: [
    "Bánh Mì Thảo Trang",
    "bánh mì truyền thống",
    "lò bánh gia đình",
    "đặt bánh mì số lượng lớn",
    "bánh mì doanh nghiệp",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full">
      <body
        className={`${beVietnamPro.variable} ${freeman.variable} ${playfairDisplay.variable} flex min-h-full flex-col antialiased`}
      >
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
