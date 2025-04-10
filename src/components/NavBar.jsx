import React, { useState } from "react";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full bg-black fixed top-0 left-0 z-50 text-white">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center items-center h-20">
        <div className="text-2xl font-mono text-center bg-red-700 rounded-full px-4 py-2 hover:bg-red-600 hover:tracking-wider max-lg:text-xl transition-all duration-300 shadow-lg shadow-yellow-500">
          <h1 className="animate-bounce">NewSApp</h1>
        </div>
        <ul className="flex flex-row justify-center items-center px-10 py-4 gap-15 text-xl font-mono font-bold max-lg:gap-2 max-lg:px-1 max-xl:px-5 max-xl:gap-5">
          <li className="hover:text-yellow-400 cursor-pointer">Business</li>
          <li className="hover:text-yellow-400 cursor-pointer">
            Entertainment
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">General</li>
          <li className="hover:text-yellow-400 cursor-pointer">Health</li>
          <li className="hover:text-yellow-400 cursor-pointer">Science</li>
          <li className="hover:text-yellow-400 cursor-pointer">Sports</li>
          <li className="hover:text-yellow-400 cursor-pointer">Technology</li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 h-20">
        <div className="text-2xl font-mono text-center bg-red-700 rounded-full px-4 py-2 hover:bg-red-600 transition-all duration-300 shadow-lg shadow-yellow-500">
          <h1 className="animate-bounce">NewSApp</h1>
        </div>
        <button
          onClick={() => setOpen(!isOpen)}
          className="text-white text-3xl font-bold focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden text-white flex flex-col items-center gap-4 text-lg font-mono font-semibold   w-full absolute top-20 left-0 py-6 transition-all duration-600 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <a className="hover:text-yellow-400 cursor-pointer">Business</a>
        <a className="hover:text-yellow-400 cursor-pointer">Entertainment</a>
        <a className="hover:text-yellow-400 cursor-pointer">General</a>
        <a className="hover:text-yellow-400 cursor-pointer">Health</a>
        <a className="hover:text-yellow-400 cursor-pointer">Science</a>
        <a className="hover:text-yellow-400 cursor-pointer">Sports</a>
        <a className="hover:text-yellow-400 cursor-pointer">Technology</a>
      </div>
    </div>
  );
}

export default NavBar;
