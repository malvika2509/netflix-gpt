import React from "react";
import logo from "../utils/image/logo.jpg";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full px-32 py-2">
      <div className="flex justify-between items-center bg-transparent ">
        {/* Logo Section */}
        <div>
          <img className="w-48 h-30" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
