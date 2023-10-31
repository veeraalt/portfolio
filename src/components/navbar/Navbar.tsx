import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars as MenuIcon } from "react-icons/fa6";
import { useOnClickOutsideRefs } from "../../hooks/useOnClickOutsideRefs";
import { ToggleButton } from "../toggleButton/ToggleButton";
import { useColorScheme } from "../../hooks/useColorScheme";
import "./Navbar.css";

const navigationLinks = [
  { to: "/projects", text: "Projects" },
  { to: "/cv", text: "CV" },
  { to: "/contact", text: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRefs = [mobileMenuRef, mobileMenuButtonRef];
  const { isDark, handleDarkModeToggle } = useColorScheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  useOnClickOutsideRefs(menuRefs, toggleMobileMenu);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname && isMobileMenuOpen) {
      toggleMobileMenu();
    }
  }, [pathname]);

  return (
    <nav className="navbar">
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <div className="navlinks">
        {navigationLinks.map((link) => (
          <NavLink className="navlink" to={link.to} key={link.to}>
            {link.text}
          </NavLink>
        ))}
      </div>
      <div className="darkModeButtonContainer">
        <ToggleButton
          onClick={handleDarkModeToggle}
          value={isDark}
          label="Dark mode"
        />
      </div>
      <button
        ref={mobileMenuButtonRef}
        className="menuButton"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label={`${isMobileMenuOpen ? "Close" : "Open"} menu`}
      >
        <MenuIcon />
      </button>
      {isMobileMenuOpen && (
        <div
          className="menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-label="Menu"
        >
          {navigationLinks.map((link) => (
            <NavLink className="navlink" to={link.to} key={link.to}>
              {link.text}
            </NavLink>
          ))}
          <div className="settingsContainer">
            <p>
              <strong>Settings</strong>
            </p>
            <ToggleButton
              onClick={handleDarkModeToggle}
              value={isDark}
              label="Dark mode"
            />
          </div>
        </div>
      )}
    </nav>
  );
};
