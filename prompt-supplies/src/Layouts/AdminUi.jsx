/* eslint-disable react/prop-types */
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminUi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex">
      {/* Slidable Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex-shrink-0 w-80 bg-gray-800 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Button */}
        <button
          className="absolute top-0 -right-16 w-16 h-16 flex items-center justify-center bg-gray-900 text-white transition-transform duration-300 transform"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Sidebar */}
        <AdminSidebar />
      </div>

      {/* Content */}
      <div
        className={`flex-grow h-full w-full py-20  transition-transform duration-500 px-20  ${
          isMenuOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Content from React Router */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminUi;
