"use client";
import { Dialog } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useOrderItems } from "../context/OrderItemsContext";
export interface SimpleDialogProps {
  open: boolean;
  orderItem: OrderItem;
  onClose: (value: number) => void;
}

export function ItemQty(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const [selectedQty, setSelectedQty] = useState(props.orderItem.quantity);

  const handleClose = () => {
    onClose(selectedQty);
  };

  function handleIncrement() {
    setSelectedQty((prev) => (prev + 1 < 11 ? prev + 1 : prev));
  }

  function handleDecrement() {
    setSelectedQty((prev) => (prev + 1 > 2 ? prev - 1 : prev));
  }

  // here we update the quantity of the product
  function handleUpdate() {
    // const indexToUpdate = orderItems.findIndex(
    //   (item) => item.productId === "product_id_1"
    // );

    // if (indexToUpdate !== -1) {
    //   // Update the properties of the item at the found index
    //   orderItems[indexToUpdate] = {
    //     ...orderItems[indexToUpdate], // Maintain existing properties
    //     quantity: selectedQty,
    //   };
    //   onClose(selectedQty);
    // }
    const updatedOrderItems = orderItems.map((item) => {
      if (item.productId === props.orderItem.productId) {
        return {
          ...item,
          quantity: selectedQty,
        };
      }
      onClose(selectedQty);
      return item;
    });

    setOrderItems(updatedOrderItems);
  }

  const { orderItems, setOrderItems } = useOrderItems();
  useEffect(() => {
    console.log("orderItems changed:", orderItems);
  }, [orderItems]);

  function onHandleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value } = e.target;
    setSelectedQty(parseInt(value));
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="w-52 h-fit sm:w-96 flex flex-col justify-center">
        {/* the head of dialog */}
        <div className="flex flex-row justify-between items-center  text-sm md:text-md lg:text-lg md:p-4 p-2 ">
          <div className="flex flex-row">
            <img
              src="/products/p2.jpg"
              alt="product-img"
              className="h-12 w-12 rounded-lg"
            />
            <div className="flex flex-col mx-4">
              <p className=" font-light text-sm text-black">Update quantity</p>
              <p className=" font-light text-xs  my-1">Camera</p>
            </div>
          </div>
          <div className="h-full w-fit p-2  ">
            <RxCross2
              onClick={handleClose}
              className="text-gray-400 hover:text-black text-2xl cursor-pointer m-auto "
            />
          </div>
        </div>
        {/* /the head of dialog */}
        <hr />

        {/* the content of dialog */}
        <div className="flex flex-row my-4 mx-[20%] items-center">
          <div className="rounded-full">
            <FaMinus
              onClick={handleDecrement}
              className=" text-gray-400 hover:text-black text-3xl cursor-pointer m-auto bg-slate-100 p-2 rounded-full"
            />
          </div>
          <input
            onChange={onHandleChange}
            value={selectedQty}
            name="subject"
            type="number"
            id="subject"
            required
            placeholder=""
            className="bg-white border shadow-sm mx-2 placeholder-[#9CA2A] text-black text-sm rounded-lg block w-full p-2.5 appearance-none "
            style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
          />
          <div className="rounded-full">
            <FaPlus
              onClick={handleIncrement}
              className=" text-gray-400 hover:text-black text-3xl cursor-pointer m-auto bg-slate-100 p-2 rounded-full"
            />
          </div>
        </div>
        <button
          onClick={handleUpdate}
          type="submit"
          className="bg-blue-950 text-white  font-light py-2.5 px-5 my-4 rounded-lg w-[80%] mx-auto"
        >
          Update
        </button>
        {/* /the content of dialog */}
      </div>
    </Dialog>
  );
}
