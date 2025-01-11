import React from "react";
import logo from "../utils/image/logo.jpg";
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const onGetStarted = () => {
    navigate("/login");
  };

  const handleSignInClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="relative h-screen">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-75"></div>
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          alt="bg"
        />
      </div>

      {/* Header Section */}
      <div className="absolute top-0 left-0 z-10 w-full px-4 sm:px-12 md:px-32 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <img
            className="w-32 sm:w-40 md:w-48 h-auto object-contain"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Language Dropdown and Sign In Button */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <select className="text-sm sm:text-base bg-black text-white px-3 py-2 rounded-md border-white border-2">
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
          <button
            onClick={handleSignInClick}
            className="text-sm sm:text-base bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Main Content (Text and Email Input) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-8 md:px-16">
        <div className="text-4xl sm:text-3xl md:text-6xl font-extrabold py-6 text-center">
          Unlimited movies, <p>TV shows and more</p>
        </div>
        <div className="text-lg sm:text-xl md:text-2xl pb-8">
          Starts at ₹149. Cancel at any time.
        </div>
        <div className="text-md sm:text-md md:text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </div>

        <div className="lg:flex md:flex justify-center items-center space-y-4 ">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="px-4 sm:px-6 py-3 sm:py-4 w-72 sm:w-96 md:w-96 rounded-md text-gray-600 mr-4 bg-black bg-opacity-50 border-2 border-gray-600 mt-4"
            />
          </div>
          <div>
            <button
              type="submit"
              className=" font-bold bg-red-600 text-lg sm:text-xl text-white px-6 py-3 rounded-md hover:bg-red-700"
              onClick={onGetStarted}
            >
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
