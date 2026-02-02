
import "./globals.css";
import type { Metadata } from "next";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import { CartProvider } from "@/contexts/CartContext";

export const metadata: Metadata = {
  title: "บ้านถวาย — หัตถกรรมไทยจากเชียงใหม่",
  description:
    "สืบสานภูมิปัญญาช่างฝีมือล้านนา งานแกะสลักไม้และหัตถกรรมพรีเมียมจากหมู่บ้านถวาย",
  keywords: ["บ้านถวาย", "หัตถกรรม", "แกะสลักไม้", "เชียงใหม่"],
  authors: [{ name: "บ้านถวาย" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
