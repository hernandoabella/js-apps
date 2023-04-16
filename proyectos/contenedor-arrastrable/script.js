(() => {  
    class Box {  
     constructor() {  
      this.box = document.querySelector(".box");  
      this.handleMouseDown = this.handleMouseDown.bind(this);  
      this.handleMouseUp = this.handleMouseUp.bind(this);  
      this.handleMouseMove = this.handleMouseMove.bind(this);  
     }  
     handleMouseDown() {  
      this.box.style.cursor = "move";  
      this.box.addEventListener("mouseup", this.handleMouseUp);  
      document.body.addEventListener("mousemove", this.handleMouseMove);  
      document.body.addEventListener("mouseleave", this.handleMouseUp);  
     }  
     handleMouseUp() {  
      this.box.style.cursor = "default";  
      document.body.removeEventListener("mousemove", this.handleMouseMove);  
      document.body.removeEventListener("mouseleave", this.handleMouseUp);  
     }  
     handleMouseMove(e) {  
      const boxRect = this.box.getBoundingClientRect();  
      this.box.style.top = `${boxRect.top + e.movementY}px`;  
      this.box.style.left = `${boxRect.left + e.movementX}px`;  
     }  
     init() {  
      this.box.addEventListener("mousedown", this.handleMouseDown);  
     }  
    }  
    const box = new Box();  
    box.init();  
   })(); 