"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ItemQty } from "./ItemQty";
export default function OrderItem(prompt: { orderItems: OrderItem }) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("emails[1]");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div className="flex flex-row w-full justify-between my-2">
      <div className="flex flex-row">
        <img
          src="/products/p2.jpg"
          alt="product-img"
          className="h-12 w-12 rounded-lg"
        />
        <div className="flex flex-col mx-4">
          <p className=" font-light text-sm text-black">
            {prompt.orderItems.name}
          </p>
          <div
            onClick={handleClickOpen}
            className="flex flex-row cursor-pointer my-1 bg-gray-200 justify-center rounded-sm p-0.5"
          >
            <p className="text-xs text-black">
              {"Qty " + prompt.orderItems.quantity}
            </p>
            <RiArrowDropDownLine />
          </div>
          <ItemQty
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </div>
      </div>
      <div className="items-start text-right">
        <h2 className=" font-light text-sm text-black">
          {"$" + prompt.orderItems.price * prompt.orderItems.quantity}
        </h2>
        <p className=" font-light text-xs  my-1">
          {"$" + prompt.orderItems.price + " each"}
        </p>
      </div>
    </div>
  );
}
