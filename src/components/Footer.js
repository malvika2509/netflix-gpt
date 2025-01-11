import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-400 py-8">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
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
            <div>
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
            <div>
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
            <div>
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
          <div className="mt-6 text-center flex items-start">
            <button className="text-gray-400 border border-gray-400 px-4 py-2 text-sm hover:bg-gray-700 hover:text-white">
              Service Code
            </button>
          </div>
          <div className="mt-6 text-center text-xs text-gray-500">
            © 1997-2025 Netflix, Inc.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
