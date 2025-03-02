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
      <div className="footer-images">
        <img src="/img/footer/Facebook.png" alt="Img1" />
        <img src="/img/footer/Instagram.png" alt="Img2" />
        <img src="/img/footer/Twiter.png" alt="Img3" />

      </div>
    </footer>
  );
}

export default Footer;