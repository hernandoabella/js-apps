import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2023 Mi Empresa. Todos los derechos reservados.</p>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
