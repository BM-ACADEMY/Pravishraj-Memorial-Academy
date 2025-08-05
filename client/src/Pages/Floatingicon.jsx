import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4 bg-white shadow-lg rounded-l-lg px-2 py-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-blue-100 rounded-full transition"
        >
          <FaFacebookF className="text-blue-600" size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-pink-100 rounded-full transition"
        >
          <FaInstagram className="text-pink-500" size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-blue-100 rounded-full transition"
        >
          <FaLinkedinIn className="text-blue-700" size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-blue-100 rounded-full transition"
        >
          <FaTwitter className="text-blue-500" size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
