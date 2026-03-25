import { NavLink } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <nav id="nav-links">
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Home
      </NavLink>

      <NavLink to="/wallet" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Wallet
      </NavLink>

      <NavLink to="/transactions" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Transactions
      </NavLink>

      <NavLink to="/learn" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Learn
      </NavLink>

      <NavLink to="/support" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Support
      </NavLink>
    </nav>
  );
};

export default Navigation;




