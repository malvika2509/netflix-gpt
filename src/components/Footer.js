import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-400 py-8 w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          {/* Main Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="hidden md:block">
              <a href="#" className="block hover:underline">
                Audio Description
              </a>
              <a href="#" className="block hover:underline">
                Investor Relations
              </a>
              <a href="#" className="block hover:underline">
                Legal Notices
              </a>
            </div>
            <div className="hidden md:block">
              <a href="#" className="block hover:underline">
                Help Centre
              </a>
              <a href="#" className="block hover:underline">
                Jobs
              </a>
              <a href="#" className="block hover:underline">
                Cookie Preferences
              </a>
            </div>
            <div className="hidden md:block">
              <a href="#" className="block hover:underline">
                Gift Cards
              </a>
              <a href="#" className="block hover:underline">
                Terms of Use
              </a>
              <a href="#" className="block hover:underline">
                Corporate Information
              </a>
            </div>
            <div className="hidden md:block">
              <a href="#" className="block hover:underline">
                Media Centre
              </a>
              <a href="#" className="block hover:underline">
                Privacy
              </a>
              <a href="#" className="block hover:underline">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile View: Only show "Contact Us" */}
          <div className="md:hidden text-center ">
            <a href="#" className="block hover:underline text-sm text-gray-400">
              Contact Us
            </a>
          </div>

          <div className="mt-2 text-center text-xs text-gray-500">
            © 1997-2025 Netflix, Inc.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
