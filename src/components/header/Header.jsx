import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/img/header/logo.png" alt="Logo" className="logo" />
      </div>
      <ul className="links">
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