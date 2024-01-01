"use client";
import { useState } from "react";

export default function CardPay() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  function onHandleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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

  return (
    <div>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className=" block mb-2 text-sm font-light">
            Email
          </label>
          <input
            onChange={onHandleChange}
            value={data.email}
            name="email"
            type="email"
            id="email"
            required
            placeholder="email@example.com"
            className="bg-white border border-gray-400 placeholder-[#9CA2A] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="subject" className=" block mb-2 text-sm font-light">
            Card information
          </label>
          <input
            onChange={onHandleChange}
            value={data.subject}
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="Just Say Hi!"
            className="bg-white border border-gray-400 placeholder-[#9CA2A] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="flex flex-row mb-6">
          <input
            onChange={onHandleChange}
            value={data.subject}
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="Just Say Hi!"
            className="bg-white border border-gray-400 placeholder-[#9CA2A] text-gray-100 text-sm rounded-lg block w-1/2 p-2.5"
          />
          <input
            onChange={onHandleChange}
            value={data.subject}
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="Just Say Hi!"
            className="bg-white border border-gray-400 placeholder-[#9CA2A] text-gray-100 text-sm rounded-lg block w-1/2 p-2.5"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-950 text-gray-300  font-medium py-2.5 px-5 rounded-lg w-full"
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
