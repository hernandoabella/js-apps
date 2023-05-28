// Created by 🍇 Alex Tușinean 💜

function generate() {
    if (document.getElementById("inp").value != "") {
      appendText();
      document.querySelector(".code").innerHTML = "";
      let qrcode = new QRCode(document.querySelector(".code"), {
        text: `${document.getElementById("inp").value}`,
        width: 150, //default 128
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  }
  
  window.onload = function () {
    document.getElementById("inp").addEventListener("change", generate);
    document.getElementById("convert").addEventListener("click", generate);
  };
  
  function appendText() {
    document.getElementById("qr-text").style.display = "block";
    document.getElementById("qr-text").style.letterSpacing = "1px";
    document.getElementById("qr-text").style.wordSpacing = "2px";
    document.getElementById("qr-text").style.fontWeight = "bold";
    setTimeout(function () {
      document.getElementById("qr-text").style.letterSpacing = "0";
      document.getElementById("qr-text").style.wordSpacing = "0";
      document.getElementById("qr-text").style.fontWeight = "normal";
    }, 500);
  }
  