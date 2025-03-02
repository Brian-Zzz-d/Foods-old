import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-text">© 2025 COMIDAS Todos los derechos reservados</span>
      <span className="footer-links">
        <a href="https://www.cookiebot.com/es/politica-de-privacidad-para-mi-web/" className="politics">Política de Privacidad y Cookies</a>
        |
        <a href="https://economistas.es/condiciones-de-venta/" className="politics">Condiciones de Venta</a>
      </span>
    </footer>
  );
}

export default Footer;