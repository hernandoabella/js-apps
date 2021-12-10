const contarProducto = producto => {
    const botonEntrada = document.getElementById('entrada').value;
    const nuevoBotonEntrada = parseInt(botonEntrada);

    let total;
    total = nuevoBotonEntrada;

    if(producto == true){
     total = nuevoBotonEntrada + 1;
    }

    if(producto == false && nuevoBotonEntrada > 0){
     total = nuevoBotonEntrada - 1;
    }

    document.getElementById('cantidad').innerText = document.getElementById('entrada').value = total;
};

const botonComprar = document.getElementById('comprar');

botonComprar.addEventListener('click', function(){
   const botonEntrada = document.getElementById('cantidad').innerText =  document.getElementById('entrada').value;
   const nuevoBotonEntrada = parseInt(botonEntrada);
   const total = nuevoBotonEntrada * 78;
   document.getElementById('precio-total').innerText = total;
})