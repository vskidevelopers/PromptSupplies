/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useState } from "react";
import { useEffect } from "react";

export default function PrivateRoutes() {
  const [authUser, setAuthUser] = useState();
  //   const { user } = useAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = () => {
      if (user) {
        console.log("User exists >>", user);
        setAuthUser(user);
        navigate("/admin");
      }
    };

    fetchUser();
  }, []);

  return authUser ? <Outlet /> : <Navigate to="/login" />;
}
