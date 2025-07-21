import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.png";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Books", link: "/books" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
    { name: "Review", link: "/feedback" },
    { name: "Articles", link: "/articles" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/75 shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Virasat Logo" className="h-10 w-auto" />
          <div className="text-2xl font-extrabold tracking-tight text-black">
            <span className="text-yellow-600">Vira</span>
            <span className="text-gray-800">sat</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-yellow-600 font-semibold"
                    : "text-gray-700 hover:text-black"
                }`
              }
              end={item.link === "/"}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Language Switcher */}
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="text-sm border rounded-md px-2 py-1 bg-white"
          >
            <option value="en">🇬🇧 EN</option>
            <option value="hi">🇮🇳 HI</option>
            <option value="gu">🇮🇳 GU</option>
          </select>

          {/* Sign In Button */}
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 p-4 bg-white/95 rounded-lg shadow">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition ${
                  isActive
                    ? "text-yellow-600 font-semibold"
                    : "text-gray-800 hover:text-black"
                }`
              }
              end={item.link === "/"}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Language Switcher */}
          <select
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
              setMenuOpen(false);
            }}
            defaultValue={i18n.language}
            className="text-sm border rounded-md px-2 py-1 bg-white"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="gu">ગુજરાતી</option>
          </select>

          {/* Sign In Button */}
          <button className="bg-black text-white mt-2 px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
