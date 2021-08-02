let inputEle = document.querySelector('#inp');
let btnTranslate = document.querySelector("#btn-translate")

const url = "https://api.funtranslations.com/translate/minion.json";

let convertUrl = (text)=>{
    return url+"?"+"text="+ text
}

function errorHandler(err){
    console.log("error occcured", err);
    alert("something wrong with server try again after sometime");
}


let translatedText = document.querySelector("#translated-text");
btnTranslate.addEventListener("click", clickEventHandler);

function clickEventHandler(){
    fetch(convertUrl(inputEle.value))
    .then(response=>response.json())
    .then(result=>{
        var transText = result.contents.translated;
        translatedText.innerText = transText;
    })
    .catch(errorHandler)
};
