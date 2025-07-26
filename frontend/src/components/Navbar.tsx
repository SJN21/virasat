import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.png";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (user) setUsername(user);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Books", link: "/books" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
    { name: "Review", link: "/feedback" },
    { name: "Articles", link: "/articles" },
  ];

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.link}
        end={item.link === "/"}
        onClick={() => isMobile && setMenuOpen(false)}
        className={({ isActive }) =>
          `text-sm font-medium transition ${
            isActive
              ? "text-yellow-600 font-semibold"
              : "text-gray-700 hover:text-black"
          }`
        }
      >
        {item.name}
      </NavLink>
    ));

  const renderLanguageSwitcher = (isMobile = false) => (
    <select
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
        if (isMobile) setMenuOpen(false);
      }}
      defaultValue={i18n.language}
      className="text-xs border rounded-md px-2 py-1 bg-white"
    >
      <option value="en">🇬🇧 EN</option>
      <option value="hi">🇮🇳 HI</option>
      <option value="gu">🇮🇳 GU</option>
    </select>
  );

  const renderUserArea = () => {
    return username ? (
      <div className="text-sm text-gray-700 font-medium">Hi, {username}</div>
    ) : (
      <a
        href="/login"
        className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition text-sm font-medium"
      >
        Sign In
      </a>
    );
  };

  return (
    <nav className="w-full sticky mx-5 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            <span className="text-yellow-600">Prabhu</span>
            <span className="text-gray-800">Pariwar</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 items-center">
          {renderNavLinks()}
          {renderLanguageSwitcher()}
          {renderUserArea()}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden max-w-screen-xl mx-auto mt-2 px-6 pb-4 flex flex-col gap-4 bg-white rounded-lg shadow">
          {renderNavLinks(true)}
          {renderLanguageSwitcher(true)}
          {renderUserArea()}
        </div>
      )}
    </nav>
  );
}
