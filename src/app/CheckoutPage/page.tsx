import { IoArrowBackOutline } from "react-icons/io5";
import Footer from "./components/Footer";
import OrderItem from "./components/OrderItem";
import ApplePay from "./components/ApplePay";
import CardPay from "./components/CardPay";
export default function CheckoutPage() {
  return (
    <div className=" min-h-screen grid grid-cols-1  sm:grid-cols-12 items-center justify-between p-20 bg-white text-gray-700 ">
      <div className="min-w-full col-span-6 place-self-center flex flex-col justify-between  h-full p-8">
        {/* the items */}
        <div>
          <div className="flex flex-row items-center cursor-pointer">
            <IoArrowBackOutline className="mx-4" />
            <p>Back</p>
          </div>
          <div className="my-8">
            <p>total Price</p>
            <h1 className="text-3xl my-2 font-semibold text-black">$129.00</h1>
          </div>
          <div className="flex flex-col">
            <OrderItem />
            <OrderItem />
          </div>
        </div>
        <Footer />
      </div>

      {/* the payment form */}
      <div className="min-w-full col-span-6 place-self-center flex flex-col justify-start bg-green-50 h-full p-8">
        <ApplePay />
        <hr className="my-4" />

        <CardPay />
      </div>
    </div>
  );
}
