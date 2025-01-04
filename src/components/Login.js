import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const OnToggleSignUp = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-75"></div>
      <img
        className="w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
        alt="bg"
      />

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-96 bg-black bg-opacity-50 rounded-lg p-16 ">
        <form>
          <h2 className="text-white  text-3xl font-bold mb-6 text-left">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {/* Conditional Name Input */}
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter your name"
              className="px-6 py-4 mb-4 w-full rounded-md text-gray-400 bg-black bg-opacity-50 border-2 border-gray-400"
            />
          )}

          {/* Conditional Phone Number Input */}
          {!isSignInForm && (
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="px-6 py-4 mb-4 w-full rounded-md text-gray-400 bg-black bg-opacity-50 border-2 border-gray-400"
            />
          )}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter email address"
            className="px-6 py-4 mb-4 w-full rounded-md text-gray-400 bg-black bg-opacity-50 border-2 border-gray-400"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter password"
            className="px-6 py-4 mb-4 w-full rounded-md text-gray-400 bg-black bg-opacity-50 border-2 border-gray-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white flex py-4">
            {isSignInForm ? "New to Netflix?" : "Alreday a User?"}
            <button
              type="button"
              className="font-bold cursor-pointer"
              onClick={OnToggleSignUp}
            >
              <u>{isSignInForm ? "Sign up now." : "Sign in now."}</u>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
