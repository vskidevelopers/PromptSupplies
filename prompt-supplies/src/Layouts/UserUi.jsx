import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";

export default function UserUi() {
  return (
    <div>
      <UserNavbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
