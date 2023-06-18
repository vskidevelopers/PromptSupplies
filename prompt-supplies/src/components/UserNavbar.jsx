import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/images/goldlogo.png";

export default function UserNavbar() {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About Us", href: "about", current: false },
    { name: "Features", href: "features", current: false },
    { name: "Services", href: "services", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="fixed top-0 z-20 w-full shadow bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-end pl-10 md:justify-center sm:items-center sm:justify-around">
                <div className="hidden sm:ml-6 sm:block w-1/2">
                  <div className="flex space-x-4">
                    {navigation.map((item, i) => (
                      <span key={i}>
                        <Link
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#FDB715] text-black"
                              : "hover:border-b-2 hover:border-[#FDB715] hover:text-gray-900",
                            "rounded-md px-3 py-2 text-sm font-medium "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-shrink-0 items-center w-full sm:w-1/2 animate-pulse">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-16 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                  <div className="flex flex-col text-black">
                    <h2 className="text-2xl font-medium">Prompt Supplies</h2>
                    <p className="font-serif text-sm italic">
                      Amplify Your Reach
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  type="button"
                  to="advertise"
                  className=" w-full rounded border border-[#FDB715] bg-white hover:bg-[#FDB715] py-2 px-2 text-[#FDB715] hover:text-white"
                >
                  <div className="relative flex justify-end">
                    {/* <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#d79b10] opacity-75"></span> */}
                    <span className="">Advertise with Us</span>
                  </div>
                </Link>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="container mx-auto px-10">
              <div className="space-y-1  pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "text-gray-700"
                        : "text-gray-600 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium border-b border-[#FDB715]"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Link
                  type="button"
                  to="advertise"
                  className=" w-full rounded bg-[#FDB715] py-2 px-2 text-white "
                >
                  <div className="relative">
                    <span className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="">Advertise with Us</span>
                  </div>
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
