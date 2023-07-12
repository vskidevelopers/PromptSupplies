import {
  ArrowLeftOnRectangleIcon,
  HomeIcon,
  NewspaperIcon,
  ServerStackIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [showAdvertSubItems, setShowAdvertSubItems] = useState(false);

  const handleAdvertsClick = () => {
    setShowAdvertSubItems(!showAdvertSubItems);
  };

  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: <HomeIcon className="h-4 mr-3 w-auto text-white" />,
      href: "",
    },
    {
      id: 2,
      label: "Profiles",
      icon: <UserCircleIcon className="h-4 mr-3 w-auto text-white" />,
      href: "",
    },
    {
      id: 3,
      label: "Adverts",
      icon: <NewspaperIcon className="h-4 mr-3 w-auto text-white" />,
      href: "admin-adverts",
      subItems: [
        {
          id: 31,
          label: "All",
          href: "admin-adverts",
        },
        {
          id: 32,
          label: "Approved",
          href: "admin-adverts/approved",
        },
        {
          id: 33,
          label: "Pending",
          href: "admin-adverts/pending",
        },
        {
          id: 34,
          label: "Popular",
          href: "admin-adverts/popular",
        },
        {
          id: 35,
          label: "Featured",
          href: "admin-adverts/featured",
        },
        {
          id: 36,
          label: "Offer",
          href: "admin-adverts/offer",
        },
        {
          id: 37,
          label: "Sale",
          href: "admin-adverts/sale",
        },
      ],
    },
    {
      id: 4,
      label: "Services",
      icon: (
        <ServerStackIcon
          className="h-4 w-auto mr-3 text-white"
          href="admin-services"
        />
      ),
    },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="py-4 px-2 bg-gray-800 text-white relative h-full">
      {menuItems.map((item) => (
        <Fragment key={item.id}>
          <Link to={item.href}>
            <div
              className="flex items-center py-2 pb-5 border-b border-b-white/30 bg-gray-700/10 hover:bg-gray-900"
              onClick={item.label === "Adverts" ? handleAdvertsClick : null}
            >
              {item.icon}

              <span>{item.label}</span>
            </div>
          </Link>

          {showAdvertSubItems && item.label === "Adverts" && (
            <div className="pl-6 py-2">
              {item.subItems.map((subItem) => (
                <Link
                  to={subItem.href}
                  key={subItem.id}
                  className="flex items-center pl-4 py-2 hover:bg-gray-900"
                >
                  <span>{subItem.label}</span>
                </Link>
              ))}
            </div>
          )}
        </Fragment>
      ))}
      <div
        className=" absolute w-3/4 bottom-4 flex items-center py-2 pb-5 border-b border-b-white/30 bg-gray-700/10 hover:bg-gray-900"
        onClick={handleLogout}
      >
        <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-4" />
        <Link to={menuItems[0].href}>
          <span className="font-bold">Logout </span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
