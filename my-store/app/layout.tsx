import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
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
        className={`${inter.variable} ${playfairDisplay.variable} flex min-h-full flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
