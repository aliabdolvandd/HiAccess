import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";
import { CartStoreProvider } from "@/store/cart-provider";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CartStoreProvider>
          <Providers>{children}</Providers>
        </CartStoreProvider>
      </body>
    </html>
  );
}
