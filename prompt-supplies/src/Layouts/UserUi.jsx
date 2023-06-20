/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import { services } from "../utils/services";

export default function UserUi() {
  return (
    <div>
      <UserNavbar />
      <div className="">
        <Outlet />
      </div>
      <Footer services={services} />
    </div>
  );
}
