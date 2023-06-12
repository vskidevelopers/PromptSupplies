import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import ChecklistItem from "./ChecklistItem";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FooterContactForm } from "./ContactForm";
import Copyright from "./copyright";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "about" },
    { name: "Features", href: "features" },
    { name: "Services", href: "services" },
    { name: "Contact Us", href: "contact" },
    { name: "Request a quote", href: "quote" },
  ];

  const services = [
    "Promotional Messages",
    "Bulk SMS Services",
    "Bulk Email Services",
    "API Integrations",
    "Web Development",
    "System Development",
    "Merchandise Branding",
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1 */}
            <div className="flex flex-col items-center">
              <img src={logo} alt="Brand Logo" className="w-full h-auto mr-2" />
              <div className="mt-3">
                <ChecklistItem
                  listItem="info@promptsupplies.co.ke"
                  icon={<EnvelopeIcon className="h-4 text-white" />}
                />
                <ChecklistItem
                  listItem="+254 (0)72 365 7856"
                  icon={<PhoneIcon className="h-4 text-white" />}
                />
                <ChecklistItem
                  listItem="1372 Willy Jimmy rd, Nanyuki"
                  icon={<MapPinIcon className="h-4 text-white" />}
                />
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="container mx-auto px-4">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="list-none flex flex-col gap-3 ">
                {links.map((link, i) => (
                  <span key={i}>
                    <Link to={link.href} className="hover:text-[#FDB715] ">
                      {link.name}
                    </Link>
                  </span>
                ))}
              </ul>
            </div>

            {/* Column 3 - Our Services */}
            <div className="container mx-auto px-4 flex flex-col justify-end items-end text-end md:block md:text-start">
              <h4 className="text-xl font-bold mb-4">Our Services</h4>
              <ul className="list-none flex flex-col gap-3">
                {services.map((service, i) => (
                  <span key={i}>
                    <Link to="services" className="hover:text-[#FDB715]">
                      {service}
                    </Link>
                  </span>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact Us Form */}
            <div>
              <h4 className="text-xl font-bold mb-4">Talk to us</h4>
              <FooterContactForm />
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
}
