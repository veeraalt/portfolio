import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/projects">
        Projects
      </NavLink>
      <NavLink to="/cv">CV</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
