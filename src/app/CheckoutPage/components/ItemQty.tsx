import { Dialog } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa";
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function ItemQty(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

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
              onClick={handleClose}
              className=" text-gray-400 hover:text-black text-3xl cursor-pointer m-auto bg-slate-100 p-2 rounded-full"
            />
          </div>
          <input
            // onChange={onHandleChange}
            // value={data.subject}
            name="subject"
            type="number"
            id="subject"
            required
            placeholder=""
            className="bg-white border shadow-sm mx-2 placeholder-[#9CA2A] text-black text-sm rounded-lg block w-full p-2.5"
          />
          <div className="rounded-full">
            <FaPlus
              onClick={handleClose}
              className=" text-gray-400 hover:text-black text-3xl cursor-pointer m-auto bg-slate-100 p-2 rounded-full"
            />
          </div>
        </div>
        <button
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
