import "../css/Header.css";
import Navigation from "./Navigation";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header id="main-header">
      <Navigation />

      <div id="logo-section">
        <img id="logo" src={logo} alt="TrustPay Logo" />
        <h1>TrustPay</h1>
      </div>
    </header>
  );
};

export default Header;