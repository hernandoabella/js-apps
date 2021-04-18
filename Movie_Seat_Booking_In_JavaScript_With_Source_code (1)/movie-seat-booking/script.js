const contenedor = document.querySelector('.contenedor');
const sillas = document.querySelectorAll('.fila .seat:not(.ocupada)');
const contar = document.getElementById('contar');
const precio = document.getElementById('precio');

const peliculaSeleccionada = document.getElementById('pelicula');
let precioEntrada = +peliculaSeleccionada.value;

const populateUI = () => {
  const sillasSeleccionadas = JSON.parse(localStorage.getItem('sillasSeleccionadas'));

  if (sillasSeleccionadas !== null && sillasSeleccionadas.length > 0) {
    sillas.forEach((silla, indice) => {
      if (sillasSeleccionadas.indexOf(indice) > -1) {
        silla.classList.add('seleccionada');
      }
    });
  }

  const indicePeliculaSeleccionada = localStorage.getItem('indicePeliculaSeleccionada');
  const precioPeliculaSeleccionada = localStorage.getItem('precioPeliculaSeleccionada');

  if (indicePeliculaSeleccionada !== null) {
    peliculaSeleccionada.indiceSeleccionado = indicePeliculaSeleccionada;
  }

  if (precioPeliculaSeleccionada !== null) {
    contar.innerText = sillasSeleccionadas.length;
    precio.innerText = sillasSeleccionadas.length * +precioPeliculaSeleccionada;
  }
};

populateUI();

peliculaSelccionada = (movieIndex, moviePrice) => {
  localStorage.setItem('indicePeliculaSeleccionada', movieIndex);
  localStorage.setItem('precioPeliculaSeleccionada', moviePrice);
};

const actualizarContadorDeSillas = () => {
  const sillasSeleccionadas = document.querySelectorAll('.fila .seleccionada');

  const indiceSillas = [...sillasSeleccionadas].map(silla => [...sillas].indexOf(silla));

  localStorage.setItem('sillasSeleccionadas', JSON.stringify(indiceSillas));

  const contarSillasSeleccionadas = sillasSeleccionadas.length;

  contar.innerText = contarSillasSeleccionadas;
  precio.innerText = contarSillasSeleccionadas * precioEntrada;
};

// Evento seleccionar silla
contenedor.addEventListener('click', e => {
  if (
    e.target.classList.contains('silla') &&
    !e.target.classList.contains('ocupada')
  ) {
    e.target.classList.toggle('seleccionada');

    actualizarContadorDeSillas();
  }
});

// Evento seleccionar pelicula
peliculaSeleccionada.addEventListener('change', e => {
  precioEntrada = +e.target.value;
  peliculaSeleccionada(e.target.indiceSeleccionado, e.target.value);

  actualizarContadorDeSillas();
});
