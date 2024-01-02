"use client";
import {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";

interface OrderItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface OrderItemsContextProps {
  orderItems: OrderItem[];
  setOrderItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
}

const OrderItemsContext = createContext<OrderItemsContextProps | undefined>(
  undefined
);

export const useOrderItems = () => {
  const context = useContext(OrderItemsContext);
  if (!context) {
    throw new Error("useOrderItems must be used within an OrderItemsProvider");
  }
  return context;
};

interface OrderItemsProviderProps {
  children: ReactNode;
}

export const OrderItemsProvider: FC<OrderItemsProviderProps> = ({
  children,
}) => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const initialData: OrderItem[] = [
        {
          productId: "product_id_1",
          name: "Product 1",
          image: "/products/p1.jpg",
          quantity: 2,
          price: 19.99,
        },
        {
          productId: "product_id_2",
          name: "Product 2",
          image: "/products/p1.jpg",
          quantity: 1,
          price: 29.99,
        },
      ];

      setOrderItems(initialData);
    };

    fetchData();
  }, []);

  return (
    <OrderItemsContext.Provider value={{ orderItems, setOrderItems }}>
      {children}
    </OrderItemsContext.Provider>
  );
};
