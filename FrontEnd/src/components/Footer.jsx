import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 text-center">
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} All Rights Reserved | Famms Store
      </p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-white">Facebook</a>
        <a href="#" className="hover:text-white">Instagram</a>
        <a href="#" className="hover:text-white">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
