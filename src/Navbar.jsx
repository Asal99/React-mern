import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Mern</h1>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>Home</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
