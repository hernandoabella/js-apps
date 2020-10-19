function animate_string(id) {
   var element = document.getElementById(id);
   var textNode = element.childNodes[0];
   var text = textNode.data;

   setInterval(function () {
      text = text[text.length - 1] + text.substring(0, text.length - 1);
      textNode.data = text;
   }, 100);
}



