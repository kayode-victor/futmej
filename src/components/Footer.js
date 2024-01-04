import React from "react";
import Link from "next/link";
import { BiSolidHeart } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const footerContent = {
  contactText: {
    title: "Contact Us",
    location: "123 Main Street, Ilorin Kwara State, Nigeria",
    email: "info@futmej.com",
    phone: "+234 706 850 9180",
  },
};

const Footer = ({ className }) => {
  return (
    <footer className={`${className} overflow-hidden w-full h-full relative`}>
      <div className="container px-4 mx-auto z-20 relative md:flex">
        <div className="md:w-4/12 mb-10 md:mb-0">
          <Link
            href="/"
            className="text-[30px] lg:text-[64px] text-green-600 font-extrabold"
          >
            FUT
            <span className="text-gray-900">-</span>MEJ
            <span className="text-gray-900">.</span>
          </Link>
        </div>
        <div className="md:w-3/12">
          <div className="">
            <ul className="flex flex-col">
              {footerLinks.map((menu, i) => (
                <li key={menu.label} className="">
                  <Link
                    href={menu.href}
                    className={`relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-green-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase font-semibold pb-2`}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-5/12">
          <div className="text-left lg:text-right my-2 lg:my-0">
            {footerContent.contactText.title && (
              <h4 className="text-[18px] font-medium hidden lg:block">
                {footerContent.contactText.title}
              </h4>
            )}
            {footerContent.contactText.location && (
              <p className="text-[14px]">
                {footerContent.contactText.location}
              </p>
            )}
            {footerContent.contactText.email && (
              <p className="text-[14px]">{footerContent.contactText.email}</p>
            )}
            {footerContent.contactText.phone && (
              <p className="text-[14px]">{footerContent.contactText.phone}</p>
            )}
          </div>
        </div>
      </div>
      <div className="text-center border-t-2 mt-4  tracking-[2px] border-gray-200 ">
        <p>© 2024 Futmej. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
