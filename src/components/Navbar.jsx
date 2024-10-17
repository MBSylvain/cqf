import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Home from "../pages/Home"; // Fixed path
import Gallery from "../pages/Gallery";
import Pricing from "../pages/Princing"; // Fixed typo
import Contact from "../pages/Contact";
import Services from "../pages/Services"; // Import the Services component

const Navbar = () => {
  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-white text-lg font-bold" to="/">
            Charles Quentin
          </Link>
          <button
            className="text-white block md:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
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
            className="hidden md:flex md:items-center md:space-x-4"
            id="navbarNav"
          >
            <Link to="/Home" className="text-white hover:text-gray-400">
              Accueil
            </Link>
            <Link to="/Services" className="text-white hover:text-gray-400">
              Services
            </Link>
            <Link to="/Pricing" className="text-white hover:text-gray-400">
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

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
