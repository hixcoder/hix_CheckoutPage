"use client";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function CardPay() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
    CardNbr: "",
    cardExperDay: "",
    CardCvc: "",
    CardholderName: "",
    Zip: "",
  });
  const [errors, setErrors] = useState<Partial<typeof data>>({});

  function onHandleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    // Validate inputs here and set error if necessary

    // ===================== VALIDATE EMAIL =====================
    if (name === "email") {
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Required",
        }));
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Your email is incomplete.",
        }));
      }
    }

    // ===================== VALIDATE Card information =====================

    if (name === "CardNbr") {
      const isValidCardNbr = /^\d{16}$/.test(value); // Check if numericValue has exactly 16 digits
      const isDigit = /^\d+$/.test(value);

      console.log(value.length, " ", value);
      if (value.length == 0) {
        setData((prevData) => ({
          ...prevData,
          ["CardNbr"]: "",
        }));
      }
      if (value.length > 16 || (!isDigit && value)) {
        return;
      }
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          CardNbr: "Required",
        }));
      } else if (!isValidCardNbr) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          CardNbr: " Card information Incorrect",
        }));
      }
    }

    if (name === "cardExperDay") {
      const isValidCardNbr = /^\d{4}$/.test(value); // Check if numericValue has exactly 16 digits
      const isDigit = /^\d+$/.test(value);

      console.log(value.length, " ", value);
      if (value.length == 0) {
        setData((prevData) => ({
          ...prevData,
          ["cardExperDay"]: "",
        }));
      }
      if (value.length > 4 || (!isDigit && value)) {
        return;
      }
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          cardExperDay: "Required",
        }));
      } else if (!isValidCardNbr) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          cardExperDay: " Card information Incorrect",
        }));
      }
    }

    if (name === "CardCvc") {
      const isValidCardNbr = /^\d{3}$/.test(value); // Check if numericValue has exactly 16 digits
      const isDigit = /^\d+$/.test(value);

      console.log(value.length, " ", value);
      if (value.length == 0) {
        setData((prevData) => ({
          ...prevData,
          ["CardCvc"]: "",
        }));
      }
      if (value.length > 3 || (!isDigit && value)) {
        return;
      }
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          CardCvc: "Required",
        }));
      } else if (!isValidCardNbr) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          CardCvc: " Card information Incorrect",
        }));
      }
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // check for errors
    const hasErrors = Object.values(errors).some((error) => !!error);
    if (hasErrors) {
      // console.error("Form has errors, please fix them");
      return;
    }

    // Access form elements directly using FormData
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    formData.set("email", "");

    // Perform basic validation
    if (!email || !subject || !message) {
      // Handle validation errors, e.g., display an error message to the user
      console.error("Please fill in all the required fields");
      return;
    }

    const data = {
      email: email,
      subject: subject,
      message: message,
    };
    const JSONdata = JSON.stringify(data);
    try {
      const endpoint = "/api/send";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });
      setData({
        email: "",
        subject: "",
        message: "",
        CardNbr: "",
        cardExperDay: "",
        CardCvc: "",
        CardholderName: "",
        Zip: "",
      });
      if (!response.ok) {
        // Handle non-OK responses (e.g., server errors)
        console.error("Failed to send message");
        return;
      }

      setEmailSubmitted(true);
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 6000);
    } catch (error) {
      // Handle fetch errors (e.g., network issues)
      console.error("Error sending message:", error);
    }
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    "Morocco",
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "United Kingdom",
    "France",
    "Germany",
    "Spain",
    "Italy",
    "Russia",
    "China",
    "Japan",
    "India",
    "Australia",
    "South Africa",
    "Nigeria",
    "Egypt",
    "Kenya",
    "Saudi Arabia",
    "Turkey",
    "South Korea",
    "Indonesia",
    "Thailand",
    "Vietnam",
    "New Zealand",
    "Greece",
    "Sweden",
    "Norway",
    "Switzerland",
  ];
  return (
    <div>
      <form
        className="flex flex-col font-light text-black"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Email  */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="  mb-2 text-sm flex flex-row justify-between"
          >
            <p>Email</p>
            {errors.email === "Required" && (
              <p className="text-red-500 text-xs font-light">
                {errors.email.toUpperCase()}
              </p>
            )}
          </label>

          <input
            onChange={onHandleChange}
            value={data.email}
            name="email"
            type="email"
            id="email"
            required
            placeholder="email@example.com"
            className={`${
              errors.email ? "border-red-500 text-red-500" : "border-gray-400"
            } bg-white border   placeholder-[#9CA2A]  text-sm rounded-lg block w-full p-2.5 outline-none`}
          />
          {errors.email && errors.email !== "Required" && (
            <p className="text-red-500 font-normal text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Card information */}
        <div>
          <label
            htmlFor="CardNbr"
            className="  mb-2 text-sm flex flex-row justify-between"
          >
            <p> Card information</p>
            {(errors.CardNbr === "Required" ||
              errors.cardExperDay === "Required" ||
              errors.CardCvc === "Required") && (
              <p className="text-red-500 text-xs font-light">REQUIRED</p>
            )}
          </label>
          <input
            onChange={onHandleChange}
            value={data.CardNbr}
            name="CardNbr"
            type="text"
            id="CardNbr"
            required
            placeholder="1234 1234 1234 1234"
            className={`${
              errors.CardNbr
                ? "border-red-500 text-red-500 border-b-1"
                : "border-gray-400 border-b-0"
            } bg-white border  border-gray-400 placeholder-[#9CA2A]  text-sm rounded-t-lg block w-full p-2.5 outline-none`}
          />
        </div>
        <div className="flex flex-row ">
          <input
            onChange={onHandleChange}
            value={data.cardExperDay}
            name="cardExperDay"
            type="text"
            required
            placeholder="MM / YY"
            className={`${errors.CardNbr ? "border-t-0" : ""} ${
              errors.CardCvc ? "border-r-0 " : ""
            } ${
              errors.cardExperDay
                ? "border-red-500 text-red-500 border-b-1"
                : ""
            } bg-white border border-gray-400 placeholder-[#9CA2A]  text-sm rounded-bl-lg block w-1/2 p-2.5 outline-none`}
          />
          <input
            onChange={onHandleChange}
            value={data.CardCvc}
            name="CardCvc"
            type="text"
            required
            placeholder="CVC"
            className={`${errors.CardNbr ? "border-t-0 " : ""}  ${
              errors.CardCvc
                ? "border-red-500 text-red-500 border-l-1"
                : "border-l-0"
            } bg-white border  border-gray-400 placeholder-[#9CA2A]  text-sm rounded-br-lg block w-1/2 p-2.5 outline-none`}
          />
        </div>
        {((errors.CardNbr && errors.CardNbr !== "Required") ||
          (errors.cardExperDay && errors.cardExperDay !== "Required") ||
          (errors.CardCvc && errors.CardCvc !== "Required")) && (
          <p className="text-red-500 font-normal text-sm mt-1">
            Card information Incorrect
          </p>
        )}

        <div className="my-6">
          <label htmlFor="CardholderName" className=" block mb-2 text-sm ">
            Cardholder name
          </label>
          <input
            onChange={onHandleChange}
            value={data.CardholderName}
            name="CardholderName"
            type="text"
            id="CardholderName"
            required
            placeholder="Full name on card"
            className="bg-white border  border-gray-400 placeholder-[#9CA2A]  text-sm rounded-lg block w-full p-2.5 outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="Zip" className=" block mb-2 text-sm ">
            Country or region
          </label>
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="flex flex-row justify-between items-center cursor-pointer bg-white border border-b-0 w-full px-2.5  py-1 border-gray-400  rounded-t-lg"
          >
            <p className="text-sm text-black">Morocco</p>
            <RiArrowDropDownLine className="text-3xl" />
          </button>

          <Menu
            sx={{ width: 620 }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div className="h-36 w-96 max-w-[32rem]">
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {item}
                </MenuItem>
              ))}
            </div>
          </Menu>
          <input
            onChange={onHandleChange}
            value={data.Zip}
            name="Zip"
            type="text"
            id="Zip"
            required
            placeholder="ZIP"
            className="bg-white border  border-gray-400 placeholder-[#9CA2A]  text-sm rounded-b-lg block w-full p-2.5 outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-950 text-gray-300  font-medium py-2.5 px-5 mt-4 mb-6 rounded-lg w-full"
        >
          Pay
        </button>
        {emailSubmitted && (
          <p className="text-green-500 text-sm mt-2">Email sent successfuly</p>
        )}
      </form>
    </div>
  );
}
