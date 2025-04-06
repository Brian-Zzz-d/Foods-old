import React from 'react';
import './Conditions.css';

const Conditions = () => {
  return (
    <div className="terms-of-sale-container">
      <header className="terms-header">
        <h1>Condiciones de Venta</h1>
      </header>

      <section className="terms-section">
        <h2>Introducción</h2>
        <p>
          Estas Condiciones de Venta rigen la compra de productos y servicios a través de nuestro sitio web. Al realizar
          una compra, el cliente acepta estas condiciones y se compromete a cumplirlas.
        </p>
      </section>

      <section className="terms-section">
        <h2>Proceso de Compra</h2>
        <p>
          El proceso de compra en nuestro sitio web se realiza mediante la selección de productos, agregándolos al carrito
          de compras y completando el formulario de pago. El cliente recibirá una confirmación de su pedido a través de
          correo electrónico.
        </p>
      </section>

      <section className="terms-section">
        <h2>Precios y Pagos</h2>
        <p>
          Los precios de los productos están indicados en la moneda local y son finales, salvo que se indique lo contrario.
          Los pagos se pueden realizar a través de tarjetas de crédito, débito, o cualquier otro método disponible en el
          sitio web.
        </p>
      </section>

      <section className="terms-section">
        <h2>Envíos</h2>
        <p>
          Los productos se enviarán a la dirección proporcionada por el cliente en el formulario de compra. El tiempo de
          entrega depende de la ubicación y el método de envío seleccionado. Los costos de envío son calculados al momento
          de la compra.
        </p>
      </section>

      <section className="terms-section">
        <h2>Devoluciones y Reembolsos</h2>
        <p>
          Aceptamos devoluciones de productos en su estado original dentro de un plazo de 30 días. Para solicitar una
          devolución, el cliente debe ponerse en contacto con nuestro equipo de soporte. Los reembolsos serán procesados una
          vez que recibamos el producto devuelto.
        </p>
      </section>

      <section className="terms-section">
        <h2>Responsabilidad</h2>
        <p>
          No nos hacemos responsables por daños directos o indirectos derivados del uso de nuestros productos. Los
          clientes son responsables de seguir las instrucciones de uso y de no infringir ninguna ley relacionada con la
          adquisición o uso de los productos.
        </p>
      </section>

      <section className="terms-section">
        <h2>Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estas Condiciones de Venta en cualquier momento. Las modificaciones serán
          publicadas en esta página y tendrán efecto inmediato al ser publicadas.
        </p>
      </section>

      <footer className="terms-footer">
        <p>&copy; 2025 Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Conditions;
