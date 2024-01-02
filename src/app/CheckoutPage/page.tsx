"use client";
import { IoArrowBackOutline } from "react-icons/io5";
import Footer from "./components/Footer";
import OrderItem from "./components/OrderItem";
import ApplePay from "./components/ApplePay";
import CardPay from "./components/CardPay";
import { useEffect } from "react";
// Sample order items
const orderItems: OrderItem[] = [
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

export default function CheckoutPage() {
  useEffect(() => {
    console.log("data changed");
  }, [orderItems]);
  return (
    <div className=" min-h-screen grid grid-cols-1  lg:grid-cols-12 items-center justify-between  bg-white text-gray-700 ">
      <div className="min-w-full col-span-6 place-self-center flex flex-col justify-between items-center h-full p-4 lg:p-12 lg:bg-slate-50  shadow-inner-left">
        {/* the items */}
        <div className="  w-[90%] lg:w-[70%] max-w-[32rem]">
          <div className="flex flex-row items-center  cursor-pointer">
            <IoArrowBackOutline className="mr-4" />
            <p className="w-full ">Back</p>
          </div>
          <div className="w-full flex flex-col justify-end mx-4">
            <div className="my-8 cursor-default">
              <p>total Price</p>
              <h1 className="text-3xl my-2 font-semibold text-black">
                $129.00
              </h1>
            </div>
            <div className="flex flex-col">
              {orderItems.map((item, index) => (
                <OrderItem key={index} orderItems={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Footer />
        </div>
      </div>
      {/* /the items */}

      {/* the payment form */}
      <div className="min-w-full col-span-6 place-self-center flex flex-col justify-start items-center h-full p-4 lg:p-12">
        <div className=" w-[90%] lg:w-[70%] max-w-[32rem] ">
          <ApplePay />
          <hr className="my-4" />

          <CardPay />
        </div>
        <div className="lg:hidden block">
          <Footer />
        </div>
      </div>
      {/* /the payment form */}
    </div>
  );
}
