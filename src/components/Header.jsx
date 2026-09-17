import { useState } from "react";
import favicon from "../assets/melophile_logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu}>
        <img
          src={favicon}
          alt="Melophile"
          className="brand-logo"
        />

        <span>Melophile</span>
      </a>

      <nav className="desktop-nav">
        <a href="#classes">Classes</a>
        <a href="#teachers">Teachers</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-actions">
        <a className="call-link" href="tel:+919322210102">
          Call now
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#classes" onClick={closeMenu}>
            Classes
          </a>

          <a href="#teachers" onClick={closeMenu}>
            Teachers
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="tel:+919322210102"
            className="mobile-nav-call"
            onClick={closeMenu}
          >
            Call 93222 10102
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;