import React from "react";
// import logo from "../../assets/logo.png"; // Importamos la imagen del logo
import "./Header.css"; // Importamos el archivo de estilos CSS

function Header() {
  return (
    <div className="header">
      {/* <img src={logo} alt="Logo" className="header-logo" /> */}
      <div className="header-links">
        <a href="#">Aprende</a>
        <a href="#">Login</a>
      </div>
    </div>
  );
}

export default Header;
