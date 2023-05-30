import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface INavItem {
  label: string;
  to: string;
  isMobile: boolean;
}

const NavItem: FC<INavItem> = ({ label, to, isMobile }) => {
  const location = useLocation();

  const desktopStyles = `${
    location.pathname === to
      ? "bg-gray-900 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white"
  } rounded-md px-3 py-2 text-sm font-medium`;

  const mobileStyles = `${
    location.pathname === to
      ? "bg-gray-900 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white"
  } rounded-md px-3 py-2 text-sm font-medium`;

  return (
    <Link
      to={to}
      className={isMobile ? mobileStyles : desktopStyles}
      aria-current={location.pathname === to ? "page" : undefined}
    >
      {label}
    </Link>
  );
};

export default NavItem;
