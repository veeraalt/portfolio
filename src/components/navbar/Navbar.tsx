import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars as MenuIcon } from "react-icons/fa6";
import { NavigationLink } from "../../interfaces/common";
import { useOnClickOutsideRefs } from "../../hooks/useOnClickOutsideRefs";
import { useColorScheme } from "../../hooks/useColorScheme";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { ToggleButton } from "../toggleButton/ToggleButton";
import { LanguageMenu } from "../languageMenu/LanguageMenu";
import { MobileMenu } from "../mobileMenu/MobileMenu";
import "./Navbar.css";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRefs = [mobileMenuRef, mobileMenuButtonRef];
  const { isDark, toggleDarkMode } = useColorScheme();

  const navigationLinks: Array<NavigationLink> = [
    { to: "/", text: t("common.home") },
    { to: "/projects", text: t("common.projects") },
    { to: "/cv", text: t("common.cv") },
    { to: "/cssart", text: "CSS art" },
    { to: "/contact", text: t("common.contact") },
  ];

  // Trap focus inside mobile menu when it's open
  useFocusTrap(isMobileMenuOpen, navigationRef);

  const toggleMobileMenu = () => {
    const newMobileMenuState = !isMobileMenuOpen;
    // Clicking outside the menu closes the menu but doesn't do anything else
    if (newMobileMenuState) {
      // Open the menu
      document.body.style.pointerEvents = "none";
      if (navigationRef.current) {
        navigationRef.current.style.pointerEvents = "auto";
      }
      document.body.classList.add("menu-open");
    } else {
      // Close the menu
      document.body.style.pointerEvents = "auto";
      document.body.classList.remove("menu-open");
    }
    setMobileMenuOpen(newMobileMenuState);
  };

  // Close mobile menu when clicked outside it
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
    <nav className="navbar" ref={navigationRef}>
      <div className="navLinks">
        {navigationLinks.map((link) => (
          <NavLink className="navLink" to={link.to} key={link.to}>
            {link.text}
          </NavLink>
        ))}
        <LanguageMenu />
        <ToggleButton
          onClick={toggleDarkMode}
          value={isDark}
          label={t("settings.theme.dark")}
        />
      </div>

      <div>
        <div className="navButtons"></div>
        <button
          ref={mobileMenuButtonRef}
          className="menuButton"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label={`${
            isMobileMenuOpen ? t("common.close") : t("common.open")
          } ${t("common.menu")}`}
        >
          <MenuIcon />
        </button>
        {isMobileMenuOpen && (
          <MobileMenu
            navigationLinks={navigationLinks}
            forwardedRef={mobileMenuRef}
            isDark={isDark}
            toggleDarkMode={toggleDarkMode}
          />
        )}
      </div>
    </nav>
  );
};
