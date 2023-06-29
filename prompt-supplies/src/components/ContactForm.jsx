import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export const FooterContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Send contact email logic goes here
    setLoading(true);
    const serviceId = "service_urxlxif";
    const templateId = "template_h6mg67k";

    console.log("Data >>", data);
    console.log("form.current >>", form.current);

    try {
      emailjs
        .sendForm(
          serviceId,
          templateId,
          form.current,
          "user_hsMArHFGXfNN1qy7Tm7VS"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Your message has been sent!");
            reset();
          },
          (error) => {
            console.log(error.text);
            alert;
          }
        );
      setLoading(false);
    } catch (error) {
      console.error("An error occured while sending email >>", error);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mr-4 mx-auto bg-white shadow-md p-6"
    >
      <div className="max-w-md">
        <div className="grid grid-cols-1 gap-2">
          <label className="block">
            <input
              type="text"
              {...register("fullName")}
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
              name="full_name"
            />
          </label>
          <label className="block">
            <input
              type="tel"
              {...register("phoneNumber")}
              placeholder="Phone Number"
              className="mt-0
                block
                w-full
                px-0.5
                border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-[#FDB715]
                bg-white text-gray-600"
              name="phone_number"
            />
          </label>
          <label className="block">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="mt-0
                block
                w-full
                px-0.5
                border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-[#FDB715]
                bg-white text-gray-600"
              name="email"
            />
          </label>
          <label className="block">
            <textarea
              {...register("message")}
              placeholder="Message"
              className="mt-0
                block
                w-full
                px-0.5
                border-0 border-b-2 border-gray-200
                focus:ring-0 focus:border-[#FDB715]
                bg-white text-gray-600"
              name="message"
            ></textarea>
          </label>
        </div>
      </div>
      <button
        disabled={loading}
        type="submit"
        className={` ${
          loading ? "bg-[#FDB715]" : "bg-white"
        } mt-4 text-[#FDB715] font-bold py-2 px-4 bg-white border border-[#FDB715] hover:bg-[#FDB715] hover:text-white  `}
      >
        {loading ? "Sending ... " : "Submit"}
      </button>
    </form>
  );
};
