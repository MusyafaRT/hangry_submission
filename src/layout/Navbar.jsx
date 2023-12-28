import { useState } from "react";
import logo from "../public/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


export const HeaderButton = ({ title, href, style }) => {
  return (
    <>
      <li>
        <a href={href} className={`ml-4 ${style}`}>
          {title}
        </a>
      </li>
    </>
  );
};

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      <nav className="relative flex flex-row justify-between lg:justify-around xl:justify-between items-center w-full p-3 lg:py-6 md:px-12 max-w-screen-xl">
        <div className="icon flex flex-row items-center">
          <img
            src={logo}
            alt="logo"
            className="object-contain w-[138px] h-[48px]"
          />
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="header-button flex flex-row font-medium gap-6 xl:gap-12">
            <HeaderButton title="Tentang Kami" href="#" />
            <HeaderButton title="Semua Outlet" href="#" />
            <HeaderButton title="Promo" href="#" />
            <HeaderButton title="Karier" href="#" />
            <HeaderButton
              title="Download App"
              href="#"
              style="text-[#A30926] font-bold"
            />
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#A30926] font-bold"
          >
            <FontAwesomeIcon icon={mobileMenu ? faTimes : faBars} size="lg" />
          </button>
        </div>
        {mobileMenu && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-md">
          <ul className="header-button flex flex-col font-medium gap-4 p-4">
            <HeaderButton title="Tentang Kami" href="#" />
            <HeaderButton title="Semua Outlet" href="#" />
            <HeaderButton title="Promo" href="#" />
            <HeaderButton title="Karier" href="#" />
            <HeaderButton
              title="Download App"
              href="#"
              style="text-[#A30926] font-bold"
            />
          </ul>
        </div>
        )}
      </nav>
    </>
  );
};
