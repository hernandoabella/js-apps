const counters = document.querySelectorAll('.counter');
const speed = 250;

counters.forEach(item => {
    function updateCount() {
        // El signo de + convertirá la cadena (data-attribute e innerText(0)) en un número 
        const target = +item.getAttribute('data-target');
        const count = +item.innerText;

        const inc = target / speed;

        if(count < target) {
            item.innerText = count + inc;
            // Ejecuta la función updateCount() cada 1ms
            setTimeout(updateCount, 1);
        }
        else {
            item.innerText = target;
        }
    }

    updateCount();
});

