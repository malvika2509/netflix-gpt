import React, { useState } from "react";
import logo from "../utils/image/logo.jpg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onHandleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <header className=" w-screen flex items-center justify-between px-12 py-2  bg-gray-950 text-white fixed top-0 left-0 z-50">
      <div>
        <img className="w-36 h-14" src={logo} alt="Logo" />
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-400">
          Home
        </a>
        <a href="#" className="hover:text-gray-400">
          TV Shows
        </a>
        <a href="#" className="hover:text-gray-400">
          Movies
        </a>
        <a href="#" className="hover:text-gray-400">
          New & Popular
        </a>
        <a href="#" className="hover:text-gray-400">
          My List
        </a>
        <a href="#" className="hover:text-gray-400">
          Browse by Languages
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src="https://occ-0-2890-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
            alt="Profile Icon"
            className="w-8 h-8 rounded-lg cursor-pointer"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md text-sm">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Other Users
                </li>

                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Children
                </li>
                <hr className="border-gray-700" />
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Manage Profiles
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Transfer Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Account
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Help Centre
                </li>
                <hr className="border-gray-700" />
                {/* Updated Sign-Out Button */}
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={onHandleSignOut}
                >
                  Sign out of Netflix
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
