var btns = document.getElementsByClassName('submit');
var backs = document.getElementsByClassName('back');
var prices = document.getElementsByClassName('price');
var tally = document.getElementById('tally');
var paras = tally.getElementsByTagName('p');
var tallyP = paras[paras.length - 1];
var newPara = document.createElement('p');
var node = document.createTextNode("");
var newPara2 = newPara.appendChild(node);
var sections = document.getElementsByClassName('section-card');
var submit2 = document.getElementById("submit2");
var ch = CInputs();

function finalTally(){
    function total(totalPrice){
    var totalT = document.getElementById('total');
    totalT.innerHTML = "Total to be paid: <span class='dollar'>$" +totalPrice+"<span>";
    }
    
    var visible = document.getElementsByClassName('visible')[0];
    var paraContent =[];
    
    visible.classList.remove('visible');
    tally.setAttribute('id','finaltally');
    tally.getElementsByTagName('h1')[0].setAttribute('id','yourOrder')
    createPara('id','total');
    for (var i=0; i < paras.length-1; i++){
        paraContent.push(paras[i].textContent);
        }
    
    var paraSplit = [];
    for (var s=0; s < paraContent.length; s++){
        paraSplit[s] = paraContent[s].split(' $');
        }
    var totalPrice = 0;
    for (var p=0; p < paras.length-1; p++){
        paras[p].innerHTML = paraSplit[p][0]+" <span class='dollar'>$"+paraSplit[p][1]+"</span>";
        var prices = []; prices.push(paraSplit[p][1]);
        for (var c=0; c < prices.length; c++){
            totalPrice = totalPrice + Number(prices[c]);
        }
    }
    function chngO (){
        document.getElementsByClassName('first')[0].classList.add('visible');
        document.getElementById('finaltally').setAttribute('id','tally');
        document.getElementById('tally').innerHTML ="<h1>Your order</h1>";
        document.getElementById('mainh2').setAttribute('id','mainh1');
            
    }
    //New function for new button
    function chng1()
    {
        var ft = document.getElementById('finaltally');
        var tallyparas = ft.getElementsByTagName("p");
        while (ft.firstChild) {
            ft.removeChild(ft.firstChild);
        }
        var message = document.createElement("h1");
        var messageText = document.createTextNode("Your order has been successfully submitted.");
        message.setAttribute("id", "yourOrder2");
        message.style.fontFamily = "sans-serif";
        var success = document.getElementById('yourOrder2');
        message.appendChild(messageText);
        message.style.verticalAlign = "middle";
        ft.appendChild(message);

        var newOrderBtn = document.createElement("button");
        newOrderBtn.textContent = "New Order";
        newOrderBtn.addEventListener("click", chngO);
        newOrderBtn.style.cssFloat ="left";
        ft.appendChild(newOrderBtn);
        
        

    }
   total(totalPrice);
    document.getElementById('mainh1').setAttribute('id','mainh2');
    var lbtn = document.createElement('button');
    lbtn.textContent ='Change order';
    lbtn.style.fontSize='1rem';
    lbtn.style.textAlign='center';
    var lastwindow = document.getElementById('finaltally');
    lastwindow.appendChild(lbtn);
    lbtn.style.cssFloat = 'right';
    lbtn.addEventListener('click', chngO);

    //New button added here for accepting order//
    var rbtn = document.createElement('button');
    rbtn.textContent = 'Submit order';
    rbtn.style.fontSize = '1rem';
    rbtn.style.textAlign = 'center';
    rbtn.style.cssFloat = 'left';
    lastwindow.appendChild(rbtn);
    rbtn.addEventListener('click', chng1);
}



function createPara(attrib, avalue) {
    var newPara = document.createElement('p');
    var node = document.createTextNode("");
    newPara.setAttribute(attrib, avalue);
    newPara.appendChild(node);
    tally.appendChild(newPara);
}


function CInputs(){
    var ch = [];
    var visible = document.getElementsByClassName("visible")[0];
    var inputs = visible.getElementsByTagName('input');

    for (var chkd=0; chkd < inputs.length; chkd++) {
                if (inputs[chkd].checked) {
                    ch.push(inputs[chkd]);
            }
        }
    return ch;
}

function check(){
    var ch = 0;
    var visible = document.getElementsByClassName("visible")[0];
    var inputs = visible.getElementsByTagName('input');

    for (var chkd=0; chkd < inputs.length; chkd++) {
                if (inputs[chkd].checked) {
                    ch += 1;
            }
        }
    return ch;
}

function nextS() {
        for (var i = 0; i < sections.length - 1; i++) {
        
          //replace the display property with display:none and make the new section appear.
        if (sections[i].classList.contains('visible')){  
          sections[i].classList.remove('visible');
          sections[i+1].classList.add('visible');
            break;
          }
             
        }          
      }

function next() {
    var visible = document.getElementsByClassName("visible")[0];
    var inputs = visible.getElementsByTagName('input');
    var secParas = visible.getElementsByTagName('p');
    if (visible.classList.contains('last')==false){
    if (check() == 0){ 
        alert("You have to choose at least one item!")
    } else if (check() == 1) {
        for (var c=0; c < inputs.length; c++) {
            
        if (inputs[c].checked && inputs[c].hasAttribute('data-price')) { 
            var ingredients =+ secParas[c].innerText || secParas[c].textContent;
//                    console.log(ingredients);
                var topay = inputs[c].getAttribute('data-price');
              createPara('data-name', inputs[c].getAttribute('id'));
                paras[paras.length - 1].innerHTML = ingredients+' <span>$'+topay+'</span>';
                   }
                //otherwise if it is checked just get the text and output it into the receipt. 
            else if (inputs[c].checked && inputs[c].hasAttribute('data-price')===false){ 
                inputs = visible.getElementsByTagName('input');
                 ingredients =+ secParas[c].innerText || secParas[c].textContent;
//                console.log(ingredients[0].className);
              createPara('data-name',secParas[c].getElementsByTagName('input')[0].getAttribute('id'));
                 paras[paras.length - 1].innerHTML = ingredients+' <span>$0</span>';
             }
        }
        nextS();
    } else if  (check() > 1 ){
        for (var j=0; j < CInputs().length; j++) {
            
        if (CInputs()[j] === CInputs()[0] && CInputs()[j].hasAttribute('data-price')===false) {
           ingredients =+ CInputs()[0].parentElement.innerText || CInputs()[0].parentElement.textContent;
//                console.log(CInputs()[0].parentElement);
              createPara('data-name',CInputs()[0].getAttribute('id'));
                 paras[paras.length - 1].innerHTML = ingredients+' <span> $0</span>';
        }
            else if (CInputs()[j] !== CInputs()[0] && CInputs()[j].hasAttribute('data-price')===false) {
                ingredients =+ CInputs()[j].parentElement.innerText || CInputs()[j].parentElement.textContent;
//                console.log(CInputs()[j].parentElement);
              createPara('data-name',CInputs()[j].getAttribute('id'));
                 paras[paras.length - 1].innerHTML = ingredients+' <span> $1</span>';
                
            }
        }
    nextS();
    }
        
    
    }
else {
    if (check() == 0){ 
        alert("You have to choose at least one item!")
    } else if (check() == 1) {
        for (var c=0; c < inputs.length; c++) {
            
        if (inputs[c].checked && inputs[c].hasAttribute('data-price')) { 
            var ingredients =+ secParas[c].innerText || secParas[c].textContent;
//                    console.log(ingredients);
                var topay = inputs[c].getAttribute('data-price');
              createPara('data-name', inputs[c].getAttribute('id'));
                paras[paras.length - 1].innerHTML = ingredients+' <span>$'+topay+'</span>';
                   }
                //otherwise if it is checked just get the text and output it into the receipt. 
            else if (inputs[c].checked && inputs[c].hasAttribute('data-price')===false){ 
                inputs = visible.getElementsByTagName('input');
                 ingredients =+ secParas[c].innerText || secParas[c].textContent;
//                console.log(ingredients[0].className);
              createPara('data-name',secParas[c].getElementsByTagName('input')[0].getAttribute('id'));
                 paras[paras.length - 1].innerHTML = ingredients+' <span>$0</span>';
             }
        }
    } else if  (check() > 1 ){
        for (var j=0; j < CInputs().length; j++) {
            
        if (CInputs()[j] === CInputs()[0] && CInputs()[j].hasAttribute('data-price')===false) {
           ingredients =+ CInputs()[0].parentElement.innerText || CInputs()[0].parentElement.textContent;
//                console.log(CInputs()[0].parentElement);
              createPara('data-name',CInputs()[0].getAttribute('id'));
                 paras[paras.length - 1].innerHTML = ingredients+' <span>$0</span>';
        }
            else if (CInputs()[j] !== CInputs()[0] && CInputs()[j].hasAttribute('data-price')===false) {
                ingredients =+ CInputs()[j].parentElement.innerText || CInputs()[j].parentElement.textContent;
//                console.log(CInputs()[j].parentElement);
              createPara('data-name',CInputs()[j].getAttribute('id'));
                 paras[paras.length - 1].innerHTML = ingredients+' <span>$1</span>';
                
            }
        }
    }

finalTally();



}
}

function back(){
    
    function DelFood() {
            var secCards = document.getElementsByClassName("section-card");
            var visible = document.getElementsByClassName('visible')[0];
            function prevSection(){
                for (var q=0; q < secCards.length; q++) {
                    if (secCards[q] == visible && q > 0){
                        return q-1;
                    } else if (secCards[q] == visible && q == 0){
                return q;
                    }
            }
            }
        
            
    var prevInputs = sections[prevSection()].getElementsByTagName('input');
        
        for (var v = 0; v < prevInputs.length; v++){
            for (var pv = 0; pv < paras.length; pv++){
                if (prevInputs[v].getAttribute('id') == paras[pv].getAttribute('data-name')){
                    tally.removeChild(paras[pv]);
                }
            }
        }   
    }
DelFood();       
    
      for (var i = 0; i < sections.length; i++) {
        
        if (sections[i].classList.contains('visible') && sections[i].classList.contains('first')==false)  {  
          sections[i].classList.remove('visible');
          sections[i-1].classList.add('visible');
       break;
        } else {
            document.getElementsByClassName('first')[0].getElementsByClassName('back')[0].disabled = true
        }
          
      }
}

for(var i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', next);
  backs[i].addEventListener('click', back);
}