import {
  ArrowLeftOnRectangleIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  NewspaperIcon,
  ServerStackIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/firebase";

const AdminSidebar = () => {
  const { logout } = useAuth();
  const [showAdvertSubItems, setShowAdvertSubItems] = useState(false);
  const [showBlogsSubItems, setShowBlogsSubItems] = useState(false);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const handleShowAdvertSubItems = (itemLabel) => {
    if (itemLabel === "Blogs") {
      setShowBlogsSubItems(!showBlogsSubItems);
    } else {
      setShowAdvertSubItems(!showAdvertSubItems);
    }
  };

  const handleShowAdvertLinks = (label) => {
    if (activeSubItem === label) {
      setActiveSubItem(null);
    } else {
      setActiveSubItem(label);
    }
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
      href: "",
      subItems: [
        {
          id: 31,
          label: "Vip Adverts",
          href: "admin-adverts/vip",
          subItems: [
            {
              id: 311,
              label: "All Vip Ads",
              href: "admin-adverts/vip",
            },
            {
              id: 312,
              label: "Approved Vip Ads",
              href: "admin-adverts/vip/approved",
            },
            {
              id: 313,
              label: "Featured Vip Ads",
              href: "admin-adverts/vip/featured",
            },
            {
              id: 314,
              label: "Pending Vip Ads",
              href: "admin-adverts/vip/pending",
            },
          ],
        },
        {
          id: 32,
          label: "Normal Adverts",
          href: "admin-adverts/normal",
          subItems: [
            {
              id: 321,
              label: "All",
              href: "admin-adverts/normal",
            },
            {
              id: 322,
              label: "Approved",
              href: "admin-adverts/normal/approved",
            },
            {
              id: 323,
              label: "Pending",
              href: "admin-adverts/normal/pending",
            },
            {
              id: 324,
              label: "Popular",
              href: "admin-adverts/popular",
            },
            {
              id: 325,
              label: "Featured",
              href: "admin-adverts/normal/featured",
            },
            {
              id: 326,
              label: "Offer",
              href: "admin-adverts/normal/offer",
            },
            {
              id: 327,
              label: "Sale",
              href: "admin-adverts/normal/sale",
            },
          ],
        },
        {
          id: 33,
          label: "Upcoming Events",
          href: "admin-adverts/events",
          subItems: [
            {
              id: 421,
              label: "All",
              href: "admin-adverts/events",
            },
            {
              id: 422,
              label: "Approved",
              href: "admin-adverts/events/approved",
            },
            {
              id: 423,
              label: "Pending",
              href: "admin-adverts/events/pending",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: "Blogs",
      icon: (
        <ClipboardDocumentListIcon className="h-4 w-auto mr-3 text-white" />
      ),
      href: "admin-blogs",
      subItems: [
        {
          id: 41,
          label: "All Blogs",
          href: "admin-blogs",
        },
        {
          id: 42,
          label: "Published Blogs",
          href: "admin-blogs/published",
        },
        {
          id: 43,
          label: "Featured Blogs",
          href: "admin-blogs/featured",
        },
        {
          id: 44,
          label: "Unpublished Blogs",
          href: "admin-blogs/unpublished",
        },
      ],
    },
    {
      id: 5,
      label: "Services",
      icon: (
        <ServerStackIcon
          className="h-4 w-auto mr-3 text-white"
          href="admin/admin-services"
        />
      ),
    },
  ];

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.clear();
      navigate("/", { replace: true });
    } catch (error) {
      console.log("the following error occured during logout", error);
    }
  };

  return (
    <div className="flex flex-col justify-between py-4 px-2 bg-gray-800 text-white relative h-full">
      <div className="">
        {menuItems.map((item) => (
          <Fragment key={item.id}>
            {item.subItems ? (
              <>
                <Link to={item.href}>
                  <div
                    className="flex items-center py-2 pb-5 border-b border-b-white/30 bg-gray-700/10 hover:bg-gray-900"
                    onClick={() => handleShowAdvertSubItems(item.label)}
                  >
                    {item.icon}

                    <span>{item.label}</span>
                  </div>
                </Link>

                {showAdvertSubItems && item.label === "Adverts" && (
                  <div className="pl-6 py-2">
                    {item.subItems.map((subItem) => (
                      <div
                        key={subItem.id}
                        className=" items-center pl-4 py-2 hover:bg-gray-900"
                      >
                        <div
                          onClick={() => handleShowAdvertLinks(subItem.label)}
                          className="w-full h-full "
                        >
                          <Link to={subItem.href} className="w-full">
                            <span>{subItem.label}</span>
                          </Link>
                        </div>
                        {activeSubItem === subItem.label && (
                          <div className="pl-6 py-2">
                            {subItem.subItems.map((linkItem) => (
                              <Link
                                to={linkItem.href}
                                key={linkItem.id}
                                className="flex items-center pl-4 py-2 hover:bg-gray-900"
                              >
                                <span>{linkItem.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {showBlogsSubItems && item.label === "Blogs" && (
                  <div className="pl-6 py-2">
                    {item.subItems.map((subItem) => (
                      <div
                        key={subItem.id}
                        className=" items-center pl-4 py-2 hover:bg-gray-900"
                      >
                        <div
                          onClick={() => handleShowAdvertLinks(subItem.label)}
                          className="w-full h-full "
                        >
                          <Link to={subItem.href} className="w-full">
                            <span>{subItem.label}</span>
                          </Link>
                        </div>
                        {activeSubItem === subItem.label && (
                          <div className="pl-6 py-2">
                            {subItem.subItems?.map((linkItem) => (
                              <Link
                                to={linkItem.href}
                                key={linkItem.id}
                                className="flex w-full items-center pl-4 py-2 hover:bg-gray-900"
                              >
                                <span>{linkItem.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <Link to={item.href}>
                  <div
                    className="flex items-center py-2 pb-5 border-b border-b-white/30 bg-gray-700/10 hover:bg-gray-900"
                    onClick={
                      item.label === "Adverts" ? handleShowAdvertSubItems : null
                    }
                  >
                    {item.icon}

                    <span>{item.label}</span>
                  </div>
                </Link>
              </>
            )}
          </Fragment>
        ))}
      </div>

      <div
        className="  w-full bottom-4 flex items-center py-2 pb-5 border-b border-b-white/30 bg-gray-700/10 hover:bg-gray-900"
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
