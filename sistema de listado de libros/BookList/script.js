class Libro {
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
}

class Interfaz{
    agregarLibroLista(libro){
        const lista = document.getElementById('listaLibro');
        const fila = document.createElement('tr');

        fila.innerHTML = `
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        lista.appendChild(fila);
    }

    mostrarAlerta(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`

        div.appendChild(document.createTextNode(message));

        const contenedor = document.querySelector('.contenedor');
        const formulario = document.querySelector('#formularioLibro');

        contenedor.insertBefore(div, formulario);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    eliminarLibro(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    vaciarCampos() {
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('ISBN').value = '';
    }
}

class LocalStorage{
   static obtenerLibros() {
       let libros;
       if (localStorage.getItem('libros') === null) {
           libros = [];
       } else {
           libros = JSON.parse(localStorage.getItem('libros'));
       }

       return libros;
    }

   static mostrarLibros() {
       const libros = LocalStorage.obtenerLibros();

       libros.forEach(function (libro) {
           const interfaz = new Interfaz();

           interfaz.agregarLibroLista(libro);
       });
    }

   static agregarLibro(libro) {
       const libros = LocalStorage.obtenerLibros();

       libros.push(libro);

       localStorage.setItem('libros', JSON.stringify(libros));
    }

    static eliminarLibros(isbn) {
        const libros = LocalStorage.obtenerLibros();

        libros.forEach(function (libro, indice) {
            if (libro.isbn ===  isbn) {
                libros.splice(indice, 1);
            }
        });

        localStorage.setItem('libros', JSON.stringify(libros));
    }
}

document.addEventListener('DOMContentLoaded', LocalStorage.mostrarLibros);

// Event listeners
document.getElementById('formularioLibro').addEventListener('submit', function (e) {
    const titulo = document.getElementById('titulo').value,
        autor = document.getElementById('autor').value,
        isbn = document.getElementById('ISBN').value;

    // Crea una instancia de un nuevo libro
    const libro = new Libro(titulo, autor, isbn);

    const interfaz = new Interfaz();

    if (titulo === '' || autor === '' || isbn === '') {
        interfaz.mostrarAlerta('Por favor llena todos los campos', 'error');
    } else {

        interfaz.agregarLibroLista(libro);
        // Adds the book to storage.
        LocalStorage.agregarLibro(libro);

        interfaz.mostrarAlerta('¡Libro agregado!', 'success');
        interfaz.vaciarCampos();
    }

    e.preventDefault();
});

document.getElementById('listaLibro').addEventListener('click', function (e) {
    const interfaz = new Interfaz();

    interfaz.eliminarLibro(e.target);
    LocalStorage.eliminarLibros(e.target.parentElement.previousElementSibling.textContent);

    interfaz.mostrarAlerta('¡Libro removido!', 'success');
    e.preventDefault();
});