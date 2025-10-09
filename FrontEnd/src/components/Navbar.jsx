import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="text-2xl font-bold text-pink-600">Famms</Link>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
          <li><a href="#products" className="hover:text-pink-600">Products</a></li>
          <li><a href="#testimonial" className="hover:text-pink-600">Testimonials</a></li>
          <li><Link to="/login" className="hover:text-pink-600">Login</Link></li>
          <li><Link to="/register" className="hover:text-pink-600">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
