import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars as MenuIcon } from "react-icons/fa6";
import "./Navbar.css";

export function Navbar() {
  const [menuExpanded, setMenuExpanded] = useState(false);
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
      <button
        className="menuButton"
        onClick={() => setMenuExpanded(!menuExpanded)}
        aria-expanded={menuExpanded}
        aria-label="Menu"
      >
        <MenuIcon />
      </button>
      {menuExpanded && (
        <div className="menu">
          <NavLink className="navlink" to="/projects">
            Projects
          </NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
