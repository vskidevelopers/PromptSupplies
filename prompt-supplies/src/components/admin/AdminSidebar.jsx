import {
  HomeIcon,
  NewspaperIcon,
  ServerStackIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

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
          label: "Vip",
          href: "admin-adverts/vip",
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

  return (
    <div className="py-4 px-2 bg-gray-800 text-white">
      {menuItems.map((item) => (
        <Fragment key={item.id}>
          <div
            className="flex items-center py-2 pb-5 border-b border-b-white/30 bg-gray-700/10 hover:bg-gray-900"
            onClick={item.label === "Adverts" ? handleAdvertsClick : null}
          >
            {item.icon}
            <Link to={item.href}>
              <span>{item.label}</span>
            </Link>
          </div>

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
    </div>
  );
};

export default AdminSidebar;
