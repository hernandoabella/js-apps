window.addEventListener("DOMContentLoaded",() => {  
    const n = new Notifications("#notifications");       
});  
class Notifications {  
    constructor(qs) {  
         this.el = document.querySelector(qs);  
         this.badge = null;  
         this.items = 0;  
         this.timeout = null;  
         this.init();  
    }  
    init() {  
         if (this.el) {  
              this.el.addEventListener("click",this.read.bind(this));  
              this.badge = this.el.querySelector("[data-badge]");  
              this.reset(1);  
         }  
    }  
    read() {  
         if (this.items > 0) {  
              this.items = 0;  
              this.el.classList.remove("notifications--active");  
              this.badge.innerHTML = "";  
              const items = this.random(1,10,true);  
              clearTimeout(this.timeout);  
              this.timeout = setTimeout(this.reset.bind(this,items),2e3);  
         }  
    }  
    reset(items) {  
         this.items = items;  
         if (this.items > 0) {  
              this.el.classList.add("notifications--active");  
              this.badge.innerHTML = this.items;  
         }  
    }  
    random(min,max,round = false) {  
         const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2**32;  
         const relativeValue = (max - min) * percent;  
         return min + (round === true ? Math.round(relativeValue) : +relativeValue.toFixed(2));  
    }  
}  