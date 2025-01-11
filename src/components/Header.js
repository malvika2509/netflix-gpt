import React, { useState } from "react";
import logo from "../utils/image/logo.jpg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  const handleGptSaerchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="w-screen flex items-center justify-between px-4 py-2 bg-gray-950 text-white fixed top-0 left-0 z-50">
      {/* Logo */}
      <div>
        <img className="w-36 h-14" src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="/browse" className="hover:text-gray-400">
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
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-white">
          ☰
        </button>
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-black w-48 py-2 px-4 rounded-md shadow-lg">
            <a href="/browse" className="block py-2 text-white">
              Home
            </a>
            <a href="#" className="block py-2 text-white">
              TV Shows
            </a>
            <a href="#" className="block py-2 text-white">
              Movies
            </a>
            <a href="#" className="block py-2 text-white">
              New & Popular
            </a>
          </div>
        )}
      </div>

      {/* Right Side (Search, Language, Profile) */}
      <div className="flex items-center space-x-4">
        {showGptSearch && (
          <div className="relative">
            <label htmlFor="languages" className="sr-only">
              Browse by Languages
            </label>
            <select
              id="languages"
              name="languages"
              className="bg-black text-white rounded-md px-2 m-1 py-2 hover:bg-gray-900 border-red-600 border-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-black"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Search Icon */}
        <div>
          {!showGptSearch && (
            <button onClick={handleGptSaerchClick}>
              <Search color="white" />
            </button>
          )}
        </div>

        {/* Profile Dropdown */}
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
