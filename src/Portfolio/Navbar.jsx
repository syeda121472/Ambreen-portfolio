import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "about", "resume", "skills", "project"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white shadow">
      <nav className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-cyan-400">Port</span>folio.
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-14">
          <div className="flex space-x-8 px-6 py-1 bg-[#202e44] rounded-full">
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="capitalize text-sm font-medium hover:text-cyan-400 hover:underline underline-offset-4 transition duration-300"
              >
                {section}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="ml-4 px-4 py-1 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition duration-300 text-sm font-semibold"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] px-6 pb-4">
          <div className="flex flex-col items-start space-y-4">
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="capitalize text-sm font-medium text-white hover:text-cyan-400 transition duration-300"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {section}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-4 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition duration-300 text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
