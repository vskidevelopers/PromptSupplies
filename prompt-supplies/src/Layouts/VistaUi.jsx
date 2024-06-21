import { Outlet } from "react-router-dom";
import VistaNav from "../components/VistaNav";

function VistaUi() {
  return (
    <div className="h-full bg-slate-700">
      <VistaNav />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default VistaUi;
