import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Bars3Icon
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <XMarkIcon
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                aria-hidden="true"
                strokeWidth={1.5}
              />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <NavItem label="Home" to="/" isMobile={false} />
                <NavItem
                  label="University"
                  to="/universities"
                  isMobile={false}
                />
                <NavItem label="Faculties" to="/faculties" isMobile={false} />
                <NavItem label="Teachers" to="/teachers" isMobile={false} />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <MoonIcon
                className="h-6 w-6"
                aria-hidden="true"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`sm:hidden`} id="mobile-menu">
        <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <NavItem label="Home" to="/" isMobile={true} />
          <NavItem label="University" to="/universities" isMobile={true} />
          <NavItem label="Faculties" to="/faculties" isMobile={true} />
          <NavItem label="Teachers" to="/teachers" isMobile={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
