"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Libro = function Libro(titulo, autor, isbn) {
  _classCallCheck(this, Libro);

  this.titulo = titulo;
  this.autor = autor;
  this.isbn = isbn;
};

var Interfaz =
/*#__PURE__*/
function () {
  function Interfaz() {
    _classCallCheck(this, Interfaz);
  }

  _createClass(Interfaz, [{
    key: "agregarLibroLista",
    value: function agregarLibroLista(libro) {
      var lista = document.getElementById('listaLibro');
      var fila = document.createElement('tr');
      fila.innerHTML = "\n        <td>".concat(libro.titulo, "</td>\n        <td>").concat(libro.autor, "</td>\n        <td>").concat(libro.isbn, "</td>\n        <td><a href=\"#\" class=\"delete\">X</a></td>\n        ");
      lista.appendChild(fila);
    }
  }, {
    key: "mostrarAlerta",
    value: function mostrarAlerta(message, className) {
      var div = document.createElement('div');
      div.className = "alert ".concat(className);
      div.appendChild(document.createTextNode(message));
      var contenedor = document.querySelector('.contenedor');
      var formulario = document.querySelector('#formularioLibro');
      contenedor.insertBefore(div, formulario);
      setTimeout(function () {
        document.querySelector('.alert').remove();
      }, 3000);
    }
  }, {
    key: "eliminarLibro",
    value: function eliminarLibro(target) {
      if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
      }
    }
  }, {
    key: "vaciarCampos",
    value: function vaciarCampos() {
      document.getElementById('titulo').value = '';
      document.getElementById('autor').value = '';
      document.getElementById('ISBN').value = '';
    }
  }]);

  return Interfaz;
}();

var LocalStorage =
/*#__PURE__*/
function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }

  _createClass(LocalStorage, null, [{
    key: "obtenerLibros",
    value: function obtenerLibros() {
      var libros;

      if (localStorage.getItem('libros') === null) {
        libros = [];
      } else {
        libros = JSON.parse(localStorage.getItem('libros'));
      }

      return libros;
    }
  }, {
    key: "mostrarLibros",
    value: function mostrarLibros() {
      var libros = LocalStorage.obtenerLibros();
      libros.forEach(function (libro) {
        var interfaz = new Interfaz();
        interfaz.agregarLibroLista(libro);
      });
    }
  }, {
    key: "agregarLibro",
    value: function agregarLibro(libro) {
      var libros = LocalStorage.obtenerLibros();
      libros.push(libro);
      localStorage.setItem('libros', JSON.stringify(libros));
    }
  }, {
    key: "eliminarLibros",
    value: function eliminarLibros(isbn) {
      var libros = LocalStorage.obtenerLibros();
      libros.forEach(function (libro, indice) {
        if (libro.isbn === isbn) {
          libros.splice(indice, 1);
        }
      });
      localStorage.setItem('libros', JSON.stringify(libros));
    }
  }]);

  return LocalStorage;
}();

document.addEventListener('DOMContentLoaded', LocalStorage.mostrarLibros); // Event listeners

document.getElementById('formularioLibro').addEventListener('submit', function (e) {
  var titulo = document.getElementById('titulo').value,
      autor = document.getElementById('autor').value,
      isbn = document.getElementById('ISBN').value; // Crea una instancia de un nuevo libro

  var libro = new Libro(titulo, autor, isbn);
  var interfaz = new Interfaz();

  if (titulo === '' || autor === '' || isbn === '') {
    interfaz.mostrarAlerta('Por favor llena todos los campos', 'error');
  } else {
    interfaz.agregarLibroLista(libro); // Adds the book to storage.

    LocalStorage.agregarLibro(libro);
    interfaz.mostrarAlerta('¡Libro agregado!', 'success');
    interfaz.vaciarCampos();
  }

  e.preventDefault();
});
document.getElementById('listaLibro').addEventListener('click', function (e) {
  var interfaz = new Interfaz();
  interfaz.eliminarLibro(e.target);
  LocalStorage.eliminarLibros(e.target.parentElement.previousElementSibling.textContent);
  interfaz.mostrarAlerta('¡Libro removido!', 'success');
  e.preventDefault();
});