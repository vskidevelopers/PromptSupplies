import {
  HomeIcon,
  NewspaperIcon,
  ServerStackIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
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
        <Link key={item.id} to={item.href}>
          <div className="flex items-center py-2 pb-5 border-b border-b-white/30 bg-gray-700/10 hover:bg-gray-900">
            {item.icon}
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AdminSidebar;
