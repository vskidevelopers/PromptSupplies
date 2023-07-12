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

import ServiceDetail from "./pages/ServiceDetail";
import { services } from "./utils/services";
import { projects } from "./utils/webProjects";
import AdminProfiles from "./components/admin/AdminProfiles";
import AdminAdvertsUi from "./components/admin/AdminAdvertsUi";
import AdminServices from "./components/admin/AdminServices";
import AllAdverts from "./components/admin/AllAdverts";
import PendingAdverts from "./components/admin/PendingAdverts";
import ApprovedAdverts from "./components/admin/ApprovedAdverts";
import Projects from "./pages/Projects";
import EfficientServices from "./pages/EfficientServices";
import PopularAdverts from "./components/admin/PopularAdverts";
import FeaturedAdverts from "./components/admin/FeaturedAdverts";
import OfferAdverts from "./components/admin/OfferAdverts";
import SaleAdverts from "./components/admin/SaleAdverts";

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
        <Route path="projects" element={<Projects projects={projects} />} />
        <Route path="advertise" element={<EfficientServices />} />
        <Route
          path="service-detail/:id"
          element={<ServiceDetail serviceList={serviceList} />}
        />
      </Route>

      {/* Admin-Related Routes */}
      <Route path="admin" element={<AdminUi />}>
        <Route index element={<AdminProfiles />} />
        <Route path="admin-adverts" element={<AdminAdvertsUi />}>
          <Route index element={<AllAdverts />} />
          <Route path="approved" element={<ApprovedAdverts />} />
          <Route path="pending" element={<PendingAdverts />} />
          <Route path="popular" element={<PopularAdverts />} />
          <Route path="featured" element={<FeaturedAdverts />} />
          <Route path="offer" element={<OfferAdverts />} />
          <Route path="sale" element={<SaleAdverts />} />
        </Route>
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
