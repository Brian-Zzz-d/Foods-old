import React from 'react';
import './Politics.css';

const Politics = () => {
  return (
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <h1>Política de Privacidad</h1>
      </header>

      <section className="privacy-section">
        <h2>Introducción</h2>
        <p>
          En nuestra empresa, la privacidad de nuestros usuarios es muy importante. Esta Política de Privacidad describe
          cómo recopilamos, usamos y protegemos la información personal que nos proporcionas.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Información que recopilamos</h2>
        <p>
          Recopilamos información personal como nombre, dirección de correo electrónico, número de teléfono, etc., cuando
          los usuarios interactúan con nuestro sitio o servicio. Esto se utiliza para mejorar la experiencia del usuario y
          proporcionar los servicios solicitados.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Uso de la información</h2>
        <p>
          La información recopilada se utiliza para ofrecer nuestros servicios, personalizar la experiencia y enviarte
          actualizaciones. No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea
          requerido por la ley.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Seguridad de la información</h2>
        <p>
          Tomamos medidas de seguridad para proteger tu información personal. Sin embargo, ninguna transmisión de datos por
          Internet o almacenamiento electrónico es completamente seguro, por lo que no podemos garantizar la seguridad total.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Cookies</h2>
        <p>
          Usamos cookies para mejorar la experiencia en nuestro sitio web. Las cookies son pequeños archivos que se guardan
          en tu dispositivo para ayudar a personalizar y optimizar el uso del sitio.
        </p>
      </section>

      <section className="privacy-section">
        <h2>Cambios en la Política de Privacidad</h2>
        <p>
          Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será
          publicado en esta página con una nueva fecha de vigencia.
        </p>
      </section>

      <footer className="privacy-footer">
        <p>&copy; 2025 Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Politics;
