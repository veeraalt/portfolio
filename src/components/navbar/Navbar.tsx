import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars as MenuIcon } from "react-icons/fa6";
import { useOnClickOutsideRefs } from "../../hooks/useOnClickOutsideRefs";
import { ToggleButton } from "../toggleButton/ToggleButton";
import { useColorScheme } from "../../hooks/useColorScheme";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import "./Navbar.css";

const navigationLinks = [
  { to: "/projects", text: "Projects" },
  { to: "/cv", text: "CV" },
  { to: "/contact", text: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRefs = [mobileMenuRef, mobileMenuButtonRef];
  const { isDark, handleDarkModeToggle } = useColorScheme();

  // Trap focus inside mobile menu when it's open
  useFocusTrap(isMobileMenuOpen, mobileMenuContainerRef);

  const toggleMobileMenu = () => {
    const newMobileMenuState = !isMobileMenuOpen;
    // Clicking outside the menu closes the menu but doesn't do anything else
    if (newMobileMenuState) {
      // Open the menu
      document.body.style.pointerEvents = "none";
      if (mobileMenuContainerRef.current) {
        mobileMenuContainerRef.current.style.pointerEvents = "auto";
      }
      document.body.classList.add("menu-open");
    } else {
      // Close the menu
      document.body.style.pointerEvents = "auto";
      document.body.classList.remove("menu-open");
    }
    setMobileMenuOpen(newMobileMenuState);
  };

  useOnClickOutsideRefs(menuRefs, toggleMobileMenu);

  const { pathname } = useLocation();

  // Close mobile menu if location is changed
  useEffect(() => {
    if (pathname && isMobileMenuOpen) {
      toggleMobileMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close mobile menu if 'Escape' key is pressed and move focus to the menu button
  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggleMobileMenu();
        mobileMenuButtonRef?.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEsc);

    return () => window.removeEventListener("keydown", closeOnEsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMenuOpen]);

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
      <div ref={mobileMenuContainerRef}>
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
      </div>
    </nav>
  );
};
