import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Logo from "../../assets/images/denko/denko2.png"; 
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={Logo} alt="Denko Swoboda Logo" className="logo-img" />
        </Link>
        <div className="menu-icon">
          <Menu right isOpen={menuOpen} onStateChange={handleStateChange}>
            <Link to="/about" className="menu-item" onClick={closeMenu}>
              Sobre mí
            </Link>
            <Link to="/services" className="menu-item" onClick={closeMenu}>
              Servicios
            </Link>
            <Link to="/contact" className="menu-item" onClick={closeMenu}>
              Contacto
            </Link>
          </Menu>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Sobre mí
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;