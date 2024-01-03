import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "./providers/TanstackProvider";
import { OrderProvider } from "./CheckoutPage/context/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrderProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </OrderProvider>
      </body>
    </html>
  );
}
