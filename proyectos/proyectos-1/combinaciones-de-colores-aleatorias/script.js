

function randDarkColor() {
    let lum = -0.25;
    let hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    let rgb = "#",
        c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    
    document.querySelector('.color1').style.background = rgb;
    document.querySelector('.example').style.background = rgb;
    document.querySelector('.color-value-1').innerHTML = rgb;
    console.log(rgb)
    
}

function generateLightColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++){
        color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
    }
    
    document.querySelector('.color2').style.background = color;
    document.querySelector('.example').style.color = color;
    document.querySelector('.color-value-2').innerHTML = color;
    console.log(color)
}

function handler () {
    randDarkColor()
    generateLightColorHex()
}

function generar() {
    console.log('generando un nuevo color...')
    handler()
}