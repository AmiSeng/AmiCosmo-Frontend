import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-pink-500 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">AmiCosmo</h1>
        <nav className="space-x-6">
          <a href="#hero" className="hover:text-white transition">
            Home
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#categories" className="hover:text-white transition">
            Categories
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
