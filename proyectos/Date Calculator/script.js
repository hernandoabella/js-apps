let span = document.querySelector(".date_span");  
 let dateInputs = document.querySelectorAll('input');  
 dateInputs[1].valueAsDate = new Date();  
 function calculateElapse() {  
  if (!isNaN(dateInputs[0].valueAsNumber) && !isNaN(dateInputs[1].valueAsDate)) { // I don't think this is necessary, but it's robust.  
   span.textContent = "" + ((dateInputs[1].valueAsDate - dateInputs[0].valueAsDate) / (24 * 60 * 60 * 1000)) + " day(s)";  
  }  
 }  
 dateInputs.forEach(elements => elements.addEventListener('change', calculateElapse));  