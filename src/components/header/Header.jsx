import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/img/header/Logo.png" alt="Logo" className="logo" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`links ${menuOpen ? "open" : ""}`}>
        <li><a href="/home" className="">Inicio</a></li>
        <li><a href="/chefs" className="">Chefs</a></li>
        <li><a href="/famous-dish" className="">Platos</a></li>
        <li><a href="/recipe" className="">Recetas</a></li>
        <li><a href="/restaurants" className="">Restaurantes</a></li>
      </ul>
    </header>
  );
}

export default Header;