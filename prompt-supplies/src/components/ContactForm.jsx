import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const FooterContactForm = () => {
  const footerContactForm = useRef();
  const footerContactFormInitialState = {
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  };

  const [footerContactFormData, setFooterContactFormData] = useState(
    footerContactFormInitialState
  );

  const handleChange = (e) => {
    setFooterContactFormData({
      ...footerContactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const sendContactEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_urxlxif";
    const templateId = "template_h6mg67k";

    try {
      emailjs
        .sendForm(
          serviceId,
          templateId,
          footerContactForm.current,
          "user_hsMArHFGXfNN1qy7Tm7VS"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Your message has been sent!");
            setFooterContactFormData(footerContactFormInitialState);
          },
          (error) => {
            console.log(error.text);
            alert;
          }
        );
    } catch (error) {
      console.error("An error occured while sending email >>", error);
    }
  };

  return (
    <form
      ref={footerContactForm}
      onSubmit={sendContactEmail}
      className="max-w-md mr-4 mx-auto bg-white shadow-md p-6"
    >
      <div className="max-w-md">
        <div className="grid grid-cols-1 gap-2">
          <label className="block">
            <input
              type="text"
              name="fullName"
              value={footerContactFormData.fullName}
              onChange={handleChange}
              className="
                      mt-0
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200
                      focus:ring-0 focus:border-[#FDB715]
                      bg-white text-gray-600
                    "
              placeholder="Full Name"
            />
          </label>
          <label className="block">
            <input
              type="tel"
              name="phoneNumber"
              value={footerContactFormData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="mt-0
                block
                w-full
                px-0.5
                border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-[#FDB715]
                bg-white text-gray-600"
            />
          </label>
          <label className="block">
            <input
              type="email"
              name="email"
              value={footerContactFormData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-0
                block
                w-full
                px-0.5
                border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-[#FDB715]
                bg-white text-gray-600"
            />
          </label>
          <label className="block">
            <textarea
              name="message"
              value={footerContactFormData.message}
              onChange={handleChange}
              placeholder="Message"
              className="mt-0
                block
                w-full
                px-0.5
                border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-[#FDB715]
                bg-white text-gray-600"
            ></textarea>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 text-[#FDB715] font-bold py-2 px-4 bg-white border border-[#FDB715] hover:bg-[#FDB715] hover:text-white"
      >
        Submit
      </button>
    </form>
  );
};
