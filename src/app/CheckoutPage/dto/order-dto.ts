interface CheckoutPayload {
  order: Order;
  customer: Customer;
  paymentMethod: PaymentMethod;
}

interface Order {
  items: OrderItem[];
  totalPrice: number;
}

interface OrderItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface Customer {
  name: string;
  email: string;
  address: string;
}

interface PaymentMethod {
  type: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}
