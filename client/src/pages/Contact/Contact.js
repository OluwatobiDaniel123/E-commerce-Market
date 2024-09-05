import React from "react";
import { useRef } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qh08omd",
        "template_icla7gq",
        form.current,
        "uDj1nlX9BVEqunnYs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully...");
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <form ref={form} onSubmit={sendEmail} className="pb-20">
        <h1 className="font-titleFont font-semibold text-3xl">
          Fill up a Form
        </h1>
        <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
          <div>
            <p className="text-base font-titleFont font-semibold px-2">Name</p>
            <input
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              type="text"
              name="name"
              placeholder="Enter your name here"
              required
            />
          </div>
          <div>
            <p className="text-base font-titleFont font-semibold px-2">Email</p>
            <input
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              type="email"
              name="email"
              placeholder="Enter your email here"
              required
            />
          </div>
          <div>
            <p className="text-base font-titleFont font-semibold px-2">
              Messages
            </p>
            <textarea
              cols="30"
              rows="3"
              name="message"
              className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
              placeholder="Enter your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
