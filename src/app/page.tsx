import Image from "next/image";
import CheckoutPage from "./CheckoutPage/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OrderItemsProvider } from "./CheckoutPage/context/OrderItemsContext";

export default function Home() {
  return (
    <main>
      <CheckoutPage />
    </main>
  );
}
