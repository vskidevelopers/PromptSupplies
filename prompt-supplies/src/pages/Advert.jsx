import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import AdvertSlider from "../components/AdvertSlider";
import FloatingAddIcon from "../components/FloatingAddIcon";

function Advert() {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    imagePoster: "",
    description: "",
  };
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the input values using the formData object
    // For simplicity, this example just logs the values to the console
    console.log(formData);
    // Reset the form
    setFormData(initialFormData);
    // Close the modal
    setShow(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      <HeroSection
        tagline="Unlock Growth Opportunities"
        title="Advertise"
        image="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div>
        {showModal ? (
          <div className="absolute w-full">
            <div className=" inset-0 flex items-center justify-center z-50 ">
              <div className="modal bg-white rounded shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Modal Title</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-yellow-400 rounded py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-yellow-400 rounded py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="phoneNumber"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full border border-yellow-400 rounded py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="imagePoster"
                    >
                      Image Poster:
                    </label>
                    <input
                      type="text"
                      id="imagePoster"
                      name="imagePoster"
                      value={formData.imagePoster}
                      onChange={handleChange}
                      className="w-full border border-yellow-400 rounded py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="description"
                    >
                      Description:
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full border border-yellow-400 rounded py-2 px-3"
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-yellow-400 text-white py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="fixed bottom-4 right-4 bg-yellow-400 text-white py-3 px-6 rounded-full shadow-lg"
            onClick={() => setShowModal(true)}
          >
            Open Modal
          </button>
        )}

        <AdvertSlider />
      </div>
      {/* <FloatingAddIcon /> */}
    </div>
  );
}

export default Advert;
