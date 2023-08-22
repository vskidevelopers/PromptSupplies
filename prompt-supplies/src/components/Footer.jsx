/* eslint-disable react/prop-types */

import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import ChecklistItem from "./ChecklistItem";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FooterContactForm } from "./ContactForm";
import CopySection from "./CopySection";
import FacebookIcon from "../assets/svgs/faceBookIcon";
import TwitterIcon from "../assets/svgs/twitterIcon";
import InstagramIcon from "../assets/svgs/instagramIcon";

export default function Footer({ services }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "about" },
    { name: "Blogs", href: "blogs" },
    { name: "Services", href: "services" },
    { name: "Our Projects", href: "projects" },
    { name: "Efficient Services", href: "advertise" },
    { name: "Contact Us", href: "" },
    { name: "Request a quote", href: "" },
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1 */}
            <div className="flex flex-col items-center">
              <img src={logo} alt="Brand Logo" className="w-full h-auto mr-2" />
              <div className="mt-3 flex flex-col gap-5 ">
                <ChecklistItem
                  listItem="info@promptsupplies.co.ke"
                  icon={<EnvelopeIcon className="h-4 text-white" />}
                />
                <ChecklistItem
                  list={true}
                  listItem={["+254 758 416 787", "+254 751 550 015"]}
                  icon={<PhoneIcon className="h-4 text-white" />}
                />
                <ChecklistItem
                  hrefLink="https://www.facebook.com/profile.php?id=100094320970455"
                  listItem="Prompt Supplies"
                  icon={<FacebookIcon fill="#fff" height="24px" />}
                />
                <ChecklistItem
                  listItem="@prompt_supplies"
                  social={true}
                  icon={<InstagramIcon fill="#fff" height="24px" />}
                />
                <ChecklistItem
                  listItem="Prompt Supplies"
                  social={true}
                  icon={<TwitterIcon fill="#fff" height="24px" />}
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
                  <span key={i} id={i}>
                    <Link
                      to={`/service-detail/${i}`}
                      className="hover:text-[#FDB715]"
                    >
                      {service?.title}
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
      <CopySection />
    </>
  );
}
