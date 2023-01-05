// Created by Shourya

window.onload = function(){alert('hover on the gradients to have their source code :)');


let random = document.getElementById('random');

let button = document.getElementById('button');

};


function helloworld() {
    let lst =[]

    for(let x=0;x<6;x++)
      lst.push(Math.floor(Math.random() * 256))
    let degree = Math.floor(Math.random() * 360 + 1);
    random.style.background = `linear-gradient(${degree}deg , rgb(${lst[0]} , ${lst[1]} , ${lst[2]}) , rgb(${lst[3]} , ${lst[4]} , ${lst[5]}))`;


    let randomsource = document.getElementById('randomsource');

    randomsource.innerHTML = `linear-gradient(${degree}deg , rgb(${lst[0]} , ${lst[1]} , ${lst[2]}) , rgb(${lst[3]} , ${lst[4]} , ${lst[5]}))`;
}