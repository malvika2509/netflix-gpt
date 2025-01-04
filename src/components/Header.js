import React from "react";
import logo from "../utils/image/logo.jpg";

const Header = () => {
  return (
    <div class="absolute px-32 py-2 bg-gradient-to-b from-black">
      <img class="w-44 h-30 " src={logo} alt="Logo" />
    </div>
  );
};

export default Header;
