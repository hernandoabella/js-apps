const toggle = document.getElementById("menuToggle");
const links = document.getElementById("menu");

toggle.addEventListener('click', function(){
    if(links.classList.contains('show')){
        links.classList.remove('show')
    }else{
        links.classList.add('show')
    }
})