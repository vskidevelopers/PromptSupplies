import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import UserUi from "./Layouts/UserUi";
import AdminUi from "./Layouts/AdminUi";

import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Features from "./pages/Features";
import About from "./pages/About";
import Advert from "./pages/Advert";
import ServiceDetail from "./pages/ServiceDetail";
import { services } from "./utils/services";
import AdminProfiles from "./components/admin/AdminProfiles";
import AdminAdverts from "./components/admin/AdminAdverts";
import AdminServices from "./components/admin/AdminServices";

const serviceList = services;
console.log("Service List from router >>>", serviceList);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* User-Related Routes */}
      <Route path="/" element={<UserUi />}>
        <Route index element={<Home services={serviceList} />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route
          path="services"
          element={<Services serviceList={serviceList} />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="advertise" element={<Advert />} />
        <Route
          path="service-detail/:id"
          element={<ServiceDetail serviceList={serviceList} />}
        />
      </Route>

      {/* Admin-Related Routes */}
      <Route path="admin" element={<AdminUi />}>
        <Route index element={<AdminProfiles />} />
        <Route path="admin-adverts" element={<AdminAdverts />} />
        <Route path="admin-services" element={<AdminServices />} />
        {/* Nested User Routes */}
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
