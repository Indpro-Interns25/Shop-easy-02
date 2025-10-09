import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const roles = [
    { label: "Seller", value: "seller" },
    { label: "Customer", value: "customer" },
    { label: "Delivery Partner", value: "delivery_partner" },
    { label: "City Admin", value: "city_admin" },
  ];

  // Navigate to register page with role query param and close dropdown
  const handleRoleClick = (role) => {
    navigate(`/register?role=${role}`);
    setShowRegisterDropdown(false);
  };

  // Optional: Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowRegisterDropdown(false);
      }
    };
    if (showRegisterDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showRegisterDropdown]);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Letter Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-indigo-600">
              S
            </Link>
          </div>

          {/* Right: Login & Register */}
          <div className="flex space-x-6 items-center relative">
            {/* Login Link */}
            <Link
              to="/login"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Login
            </Link>

            {/* Register button with click dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowRegisterDropdown(!showRegisterDropdown)}
                className="text-gray-700 hover:text-indigo-600 font-medium focus:outline-none"
                type="button"
                aria-haspopup="true"
                aria-expanded={showRegisterDropdown}
              >
                Register
              </button>

              {showRegisterDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  {roles.map(({ label, value }) => (
                    <button
                      key={value}
                      onClick={() => handleRoleClick(value)}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100"
                      type="button"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
