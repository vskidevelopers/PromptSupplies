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
import React from "react";
import AdminVipAdvertsUi from "./components/admin/AdminVipAdvertsUi";
import AdminNormalAdvertsUi from "./components/admin/AdminNormalAdvertsUi";
import AllVipAdverts from "./components/admin/AllVipAdverts";
import ApprovedVipAdverts from "./components/admin/ApprovedVipAdverts";
import PendingVipAdverts from "./components/admin/PendingVipAdverts";
import FeaturedVipAdverts from "./components/admin/FeaturedVipAdverts";
import Login from "./auth/Login";
import PrivateRoutes from "./auth/PrivateRoutes";
import AllEvents from "./components/admin/AllEvents";
import AdminEventsUi from "./components/admin/AdminEventsUi";
import ApprovedEvents from "./components/admin/ApprovedEvents";
import PendingEvents from "./components/admin/PendingEvents";
import AdminBlogsUi from "./components/admin/AdminBlogsUi";
import AllBlogs from "./components/admin/AllBlogs";
import PublishedBlogs from "./components/admin/PublishedBlogs";
import FeaturedBlogs from "./components/admin/FeaturedBlogs";
import UnpublishedBlogs from "./components/admin/UnpublishedBlogs";
import BlogDetails from "./pages/BlogDetails";
import AdminPartnersUi from "./components/admin/AdminPartnersUi";
import AllPartners from "./components/admin/AllPartners";
import Skins from "./pages/Skins";
import VistaUi from "./Layouts/VistaUi";
import VistaWelcome from "./pages/VistaWelcome";
import VistaHub from "./pages/VistaHub";
import AdminMoviesUi from "./components/admin/AdminMoviesUi";
import AllMovies from "./components/admin/AllMovies";
import SkinsCollection from "./pages/SkinsCollection";
import SkinsUi from "./Layouts/SkinsUi";
import SkinsCategory from "./pages/SkinsCategory";
import SkinDetails from "./pages/SkinDetails";
import Checkout from "./pages/Checkout";
import ShopUi from "./Layouts/ShopUi";
import Shop from "./pages/Shop";
import SkinsCheckout from "./pages/SkinsCheckout";

const serviceList = services;
console.log("Service List from router >>>", serviceList);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* User-Related Routes */}
      <Route path="/" element={<UserUi />}>
        <Route index element={<Home services={serviceList} />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Features />} />
        <Route path="blog/:id" element={<BlogDetails />} />
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
        <Route path="logIn" element={<Login />} />
      </Route>

      {/* Admin-Related Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="admin" element={<AdminUi />}>
          <Route index element={<AdminProfiles />} />
          <Route path="admin-adverts" element={<AdminAdvertsUi />}>
            <Route path="vip" element={<AdminVipAdvertsUi />}>
              <Route index element={<AllVipAdverts />} />
              <Route path="approved" element={<ApprovedVipAdverts />} />
              <Route path="pending" element={<PendingVipAdverts />} />
              <Route path="featured" element={<FeaturedVipAdverts />} />
            </Route>

            <Route path="normal" element={<AdminNormalAdvertsUi />}>
              <Route index element={<AllAdverts />} />
              <Route path="approved" element={<ApprovedAdverts />} />
              <Route path="pending" element={<PendingAdverts />} />
              <Route path="popular" element={<PopularAdverts />} />
              <Route path="featured" element={<FeaturedAdverts />} />
              <Route path="offer" element={<OfferAdverts />} />
              <Route path="sale" element={<SaleAdverts />} />
            </Route>

            <Route path="events" element={<AdminEventsUi />}>
              <Route index element={<AllEvents />} />
              <Route path="approved" element={<ApprovedEvents />} />
              <Route path="pending" element={<PendingEvents />} />
            </Route>
          </Route>

          <Route path="admin-blogs" element={<AdminBlogsUi />}>
            <Route index element={<AllBlogs />} />
            <Route path="published" element={<PublishedBlogs />} />
            <Route path="featured" element={<FeaturedBlogs />} />
            <Route path="unpublished" element={<UnpublishedBlogs />} />
          </Route>

          <Route path="admin-partners" element={<AdminPartnersUi />}>
            <Route index element={<AllPartners />} />
          </Route>
          <Route path="admin-movies" element={<AdminMoviesUi />}>
            <Route index element={<AllMovies />} />
          </Route>
          <Route path="admin-services" element={<AdminServices />} />
          {/* Nested User Routes */}
        </Route>
      </Route>

      {/* Skins Routes */}
      <Route path="skins" element={<SkinsUi />}>
        <Route index element={<Skins />} />
        <Route path="collections" element={<SkinsCollection />} />
        <Route path="collections/:category" element={<SkinsCategory />} />
        <Route path="collections/:category/:id" element={<SkinDetails />} />
        <Route path="checkout" element={<SkinsCheckout />} />
      </Route>

      {/* Shop Routes */}
      <Route path="shop" element={<ShopUi />}>
        <Route index element={<Shop />} />
        {/* <Route path="collections" element={<ShopCollection />} />
        <Route path="collections/:category" element={<ShopCategory />} />
        <Route path="collections/:category/:id" element={<ProductDetails />} /> */}
        <Route path="checkout" element={<Checkout />} />
      </Route>

      {/* Vista Videos Routes */}
      <Route path="vista-videos" element={<VistaUi />}>
        <Route index element={<VistaWelcome />} />
        <Route path="hub" element={<VistaHub />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
