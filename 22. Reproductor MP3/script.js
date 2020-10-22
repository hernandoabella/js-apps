var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%&*/\?";
var temp = "";

function generatePass(pLength) {
    temp = "";
    for (var i = 0; i < pLength; i++) {
        temp += keylist.charAt(Math.floor(Math.random() * keylist.length))
    }
    return temp;
}

function populateForm(enterLength) {
    document.passGen.output.value = generatePass(enterLength);
}

