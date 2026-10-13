import { NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  

  return (
    <header className="w-full shadow-md bg-white border-b sticky top-0 z-50">
      <nav className=" w-full mx-auto flex items-center justify-center px-6 h-16">

        {/* Logo */}

        <div className="flex w-[90%] justify-center items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
            IP
          </div>

          <h1 className="font-bold flex justify-center items-end text-xl">
            Interview Tracker
          </h1>
        </div>


       
        {/* Right Section */}

        <div className="hidden md:flex items-center gap-4">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            <User size={18} />
            Satyendra
          </button>
        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className="block px-6 py-4 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;