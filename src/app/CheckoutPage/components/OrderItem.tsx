import { RiArrowDropDownLine } from "react-icons/ri";
export default function OrderItem() {
  return (
    <div className="flex flex-row w-full justify-between my-2">
      <div className="flex flex-row">
        <img
          src="/products/p1.jpg"
          alt="product-img"
          className="h-12 rounded-lg"
        />
        <div className="flex flex-col mx-4">
          <p className=" font-light text-sm text-black">Camera</p>
          <div className="flex flex-row cursor-pointer my-1 bg-gray-200 justify-center rounded-sm p-0.5">
            <p className="text-xs text-black">Qty 1</p>
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
      <div className="items-start text-right">
        <h2 className=" font-light text-sm text-black">$65.00</h2>
        <p className=" font-light text-xs  my-1">$65.00 each</p>
      </div>
    </div>
  );
}
