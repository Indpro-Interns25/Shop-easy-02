import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // Desktop dropdown
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false); // Mobile expand

  const mobileMenuRef = useRef(null);
  const searchRef = useRef(null);
  const productsDropdownRef = useRef(null);

  useEffect(() => {
    if (isMobileOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isMobileOpen]);

  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      gsap.fromTo(
        searchRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else if (searchRef.current) {
      gsap.to(searchRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isSearchOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isProductsOpen) return;

    function handleClickOutside(event) {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target)
      ) {
        setIsProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProductsOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Logo and menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <div className="flex flex-col items-start">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              MARÁH
            </Link>
            <p className="text-xs text-gray-500 ml-[2px] tracking-wide">
              Inspired by nature
            </p>
          </div>
        </div>
        {/* Right: Navigation links + icons */}
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-pink-600">
                Home
              </Link>
            </li>
            {/* Products dropdown on click */}
            <li className="relative" ref={productsDropdownRef}>
              <button
                className={`hover:text-pink-600 flex items-center focus:outline-none`}
                onClick={() => setIsProductsOpen((open) => !open)}
              >
                Products
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded z-50">
                  <Link
                    to="/products/men"
                    className="block px-4 py-2 hover:bg-pink-50 text-gray-700"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    Men
                  </Link>
                  <Link
                    to="/products/women"
                    className="block px-4 py-2 hover:bg-pink-50 text-gray-700"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    Women
                  </Link>
                </div>
              )}
            </li>
            <li>
              <a href="#testimonial" className="hover:text-pink-600">
                Testimonials
              </a>
            </li>
            <li>
              <Link to="/login" className="hover:text-pink-600">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-pink-600">
                Register
              </Link>
            </li>
          </ul>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-pink-600 p-2 focus:outline-none"
            >
              <FiSearch size={22} />
            </button>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-pink-600 p-2"
            >
              <FiShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Input - animated container */}
      <div
        ref={searchRef}
        className={`bg-gray-50 shadow-inner overflow-hidden ${
          isSearchOpen ? "block" : "hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
            Search
          </button>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-gray-600 hover:text-pink-600"
          >
            <FiX size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - animated container */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-white border-t border-gray-200 px-6 py-4 overflow-hidden ${
          isMobileOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-3 text-gray-700 font-medium">
          <li>
            <Link to="/" onClick={() => setIsMobileOpen(false)}>
              Home
            </Link>
          </li>
          {/* Products expandable submenu */}
          <li>
            <button
              onClick={() => setIsProductsMobileOpen(!isProductsMobileOpen)}
              className="flex items-center justify-between w-full text-left focus:outline-none"
            >
              Products
              <span>
                {isProductsMobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </span>
            </button>
            {isProductsMobileOpen && (
              <ul className="ml-4 mt-2 space-y-1">
                <li>
                  <Link
                    to="/products/men"
                    onClick={() => {
                      setIsMobileOpen(false);
                      setIsProductsMobileOpen(false);
                    }}
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/women"
                    onClick={() => {
                      setIsMobileOpen(false);
                      setIsProductsMobileOpen(false);
                    }}
                  >
                    Women
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#testimonial" onClick={() => setIsMobileOpen(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsMobileOpen(false)}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={() => setIsMobileOpen(false)}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
