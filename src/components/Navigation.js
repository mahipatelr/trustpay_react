import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="nav-links">
      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <NavLink
          to="/wallet"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          onClick={closeMenu}
        >
          Wallet
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          onClick={closeMenu}
        >
          Transactions
        </NavLink>

        <NavLink
          to="/learn"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          onClick={closeMenu}
        >
          Learn
        </NavLink>

        <NavLink
          to="/support"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          onClick={closeMenu}
        >
          Support
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;