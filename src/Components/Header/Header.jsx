import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/stacklyimg1.webp"; // Replace with your logo

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Travel Agency Logo" />
          </Link>

          {/* Mobile Menu Toggle */}
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>

          {/* Navigation */}
          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/destinations" onClick={closeMenu}>
              Destinations
            </Link>

            <Link to="/tours" onClick={closeMenu}>
              Tours
            </Link>

            <Link to="/packages" onClick={closeMenu}>
              Packages
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>

            <div className="auth-buttons">
              <Link
                to="/login"
                className="header-login-btn"
                onClick={closeMenu}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="header-signup-btn"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;