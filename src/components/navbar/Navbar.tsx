import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars as MenuIcon } from "react-icons/fa6";
import { useOnClickOutsideRefs } from "../../hooks/useOnClickOutsideRefs";
import { ToggleButton } from "../toggleButton/ToggleButton";
import { useColorScheme } from "../../hooks/useColorScheme";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRefs = [mobileMenuRef, mobileMenuButtonRef];
  const { isDark, handleDarkModeToggle } = useColorScheme();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

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
        <NavLink className="navlink" to="/projects">
          Projects
        </NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="darkModeButtonContainer">
        <ToggleButton
          onClick={handleDarkModeToggle}
          value={isDark}
          offLabel="Light mode"
          onLabel="Dark mode"
        />
      </div>
      <button
        ref={mobileMenuButtonRef}
        className="menuButton"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label="Menu"
      >
        <MenuIcon />
      </button>
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="menu">
          <NavLink className="navlink" to="/projects">
            Projects
          </NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="settingsContainer">
            <p>
              <strong>Settings</strong>
            </p>
            <ToggleButton
              onClick={handleDarkModeToggle}
              value={isDark}
              offLabel="Light mode"
              onLabel="Dark mode"
            />
          </div>
        </div>
      )}
    </nav>
  );
};
