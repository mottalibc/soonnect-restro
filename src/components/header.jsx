import React from "react";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <div className="fixed max-sm:backdrop-blur-lg max-sm:border-b max-sm:h-14 md:absolute top-0 left-0 z-50 flex items-center w-full">
      {/* Desktop */}
      <DesktopNav />

      {/* Mobile */}
      <MobileNav />
    </div>
  );
};

export default Header;
