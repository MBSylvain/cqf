import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-lg font-bold" to="/Home">
          Charles Quentin
        </Link>
        <button
          className="text-white block md:hidden"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block col" : "hidden"
          } flex flex-col w-fit md:flex md:items-center md:space-x-4`}
          id="navbarNav"
        >
          <Link to="/Home" className="text-white hover:text-gray-400">
            Accueil
          </Link>
          <Link to="/Services" className="text-white hover:text-gray-400">
            Services
          </Link>
          <Link to="/Princing" className="text-white hover:text-gray-400">
            Prix
          </Link>
          <Link to="/Gallery" className="text-white hover:text-gray-400">
            Gallerie
          </Link>
          <Link to="/Contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
