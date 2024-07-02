import UserNavbar from "@/components/UserNavbar";
import { Outlet } from "react-router-dom";

function SkinsUi() {
  return (
    <div>
      <UserNavbar />
      <Outlet />
    </div>
  );
}

export default SkinsUi;
