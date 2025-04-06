import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-text">© 2025 COMIDAS Todos los derechos reservados</span>
      <ul className="footer-links">
        <li><a href="/home">Inicio</a></li>
        <li><a href="/chefs">Chefs</a></li>
        <li><a href="/famous-dish">Platos</a></li>
        <li><a href="/recipe">Recetas</a></li>
        <li><a href="/restaurants">Restaurantes</a></li>
      </ul>

      <ul className="footer-policies">
       <li><a href="/politics">Política de Privacidad y Cookies</a></li>
        |
        <li><a href="/conditions">Condiciones de Venta</a></li>
      </ul>


      <div className="footer-images">
        <img src="/img/footer/Facebook.png" alt="Img1" />
        <img src="/img/footer/Instagram.png" alt="Img2" />
        <img src="/img/footer/Twiter.png" alt="Img3" />

      </div>
    </footer>
  );
}

export default Footer;