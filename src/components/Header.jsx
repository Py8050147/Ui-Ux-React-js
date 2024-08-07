import { useState } from "react";
import logo from "../assets/logo.svg";
import { navItems } from "../utils/index.js";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container max-w-4xl md:max-w-full px-20">
      <div className="flex items-center px-4 ring-1 ring-gray-800 justify-between ">
        <div className="relative">
          <img src={logo} alt="logo" className="w-32 h-24" />
        </div>
        <div className="flex align-middle gap-8 relative">
          <ul className="text-white flex align-middle space-x-12 cursor-pointer hidden md:flex">
            {navItems.map((navItem, id) => (
              <li
                key={id}
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {navItem.tittle}
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button className="text-white" onClick={handleMenuToggle}>
            <span className="material-symbols-outlined">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`px-4 ring-1 ring-gray-800 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden relative w-full `}
      >
        <ul className="text-white absolute left-0 pl-12 pt-5 pb-5 space-y-5 cursor-pointer w-full bg-black z-30 backdrop-blur-3xl ring-1 ring-gray-700 ring-offset-gray-300">
          {navItems.map((navItem, id) => (
            <li
              key={id}
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
            >
              {navItem.tittle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
