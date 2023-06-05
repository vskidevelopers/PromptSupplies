import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-sky-600 to-violet-500  backdrop-filter backdrop-blur-lg text-white">
      <div className=" p-6  rounded-lg ">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 ">Coming Soon</h1>
        <div className="max-w-md grid mx-auto">
          <p className="text-lg mb-8 text-center">
            In the meantime, Sign up for our monthly newsletter to stay up to
            date.
          </p>
        </div>
        <div className="flex mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="px-6 py-2 bg-yellow-500 rounded-lg">
            Sign up
          </button>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Back to{" "}
          <Link to="/" className="underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
