import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link className="text-white text-2xl font-extrabold tracking-tight" to="/Home">
          Charles Quentin
        </Link>
        <div className="flex items-center">
          <button
            className="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-gray-800 z-20 md:static md:block md:w-auto transition-all duration-300`}
            id="navbarNav"
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              <Link
                to="/Home"
                className="text-white hover:text-gray-400 py-2 px-6 md:px-4 text-lg font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/Services"
                className="text-white hover:text-gray-400 py-2 px-6 md:px-4 text-lg font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/Princing"
                className="text-white hover:text-gray-400 py-2 px-6 md:px-4 text-lg font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Prix
              </Link>
              <Link
                to="/Gallery"
                className="text-white hover:text-gray-400 py-2 px-6 md:px-4 text-lg font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Gallerie
              </Link>
              <Link
                to="/Contact"
                className="text-white hover:text-gray-400 py-2 px-6 md:px-4 text-lg font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
