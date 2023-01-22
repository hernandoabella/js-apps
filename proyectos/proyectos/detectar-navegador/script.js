let userAgent = navigator.userAgent;  
let browser;  
if(userAgent.match(/edg/i)){  
 browser = "edge";  
}else if(userAgent.match(/firefox|fxios/i)){  
 browser = "firefox";  
}else if(userAgent.match(/opr//i)){  
 browser = "opera";  
}else if(userAgent.match(/chrome|chromium|crios/i)){  
 browser = "chrome";  
}else if(userAgent.match(/safari/i)){  
 browser = "safari";  
}else{  
 alert("Other browser");  
}  
const logo = document.querySelector(`.logos .${browser}`);  
if(logo != ""){  
 logo.style.opacity = "1";  
}  