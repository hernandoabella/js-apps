class ContextMenu {  
    constructor({ target = null, menuItems = [], mode = "dark" }) {  
     this.target = target;  
     this.menuItems = menuItems;  
     this.mode = mode;  
     this.targetNode = this.getTargetNode();  
     this.menuItemsNode = this.getMenuItemsNode();  
     this.isOpened = false;  
    }  
    getTargetNode() {  
     const nodes = document.querySelectorAll(this.target);  
     if (nodes && nodes.length !== 0) {  
      return nodes;  
     } else {  
      console.error(`getTargetNode :: "${this.target}" target not found`);  
      return [];  
     }  
    }  
    getMenuItemsNode() {  
     const nodes = [];  
     if (!this.menuItems) {  
      console.error("getMenuItemsNode :: Please enter menu items");  
      return [];  
     }  
     this.menuItems.forEach((data, index) => {  
      const item = this.createItemMarkup(data);  
      item.firstChild.setAttribute(  
       "style",  
       `animation-delay: ${index * 0.08}s`  
      );  
      nodes.push(item);  
     });  
     return nodes;  
    }  
    createItemMarkup(data) {  
     const button = document.createElement("BUTTON");  
     const item = document.createElement("LI");  
     button.innerHTML = data.content;  
     button.classList.add("contextMenu-button");  
     item.classList.add("contextMenu-item");  
     if (data.divider) item.setAttribute("data-divider", data.divider);  
     item.appendChild(button);  
     if (data.events && data.events.length !== 0) {  
      Object.entries(data.events).forEach((event) => {  
       const [key, value] = event;  
       button.addEventListener(key, value);  
      });  
     }  
     return item;  
    }  
    renderMenu() {  
     const menuContainer = document.createElement("UL");  
     menuContainer.classList.add("contextMenu");  
     menuContainer.setAttribute("data-theme", this.mode);  
     this.menuItemsNode.forEach((item) => menuContainer.appendChild(item));  
     return menuContainer;  
    }  
    closeMenu(menu) {  
     if (this.isOpened) {  
      this.isOpened = false;  
      menu.remove();  
     }  
    }  
    init() {  
     const contextMenu = this.renderMenu();  
     document.addEventListener("click", () => this.closeMenu(contextMenu));  
     window.addEventListener("blur", () => this.closeMenu(contextMenu));  
     document.addEventListener("contextmenu", (e) => {  
      this.targetNode.forEach((target) => {  
       if (!e.target.contains(target)) {  
        contextMenu.remove();  
       }  
      });  
     });  
     this.targetNode.forEach((target) => {  
      target.addEventListener("contextmenu", (e) => {  
       e.preventDefault();  
       this.isOpened = true;  
       const { clientX, clientY } = e;  
       document.body.appendChild(contextMenu);  
       const positionY =  
        clientY + contextMenu.scrollHeight >= window.innerHeight  
         ? window.innerHeight - contextMenu.scrollHeight - 20  
         : clientY;  
       const positionX =  
        clientX + contextMenu.scrollWidth >= window.innerWidth  
         ? window.innerWidth - contextMenu.scrollWidth - 20  
         : clientX;  
       contextMenu.setAttribute(  
        "style",  
        `--width: ${contextMenu.scrollWidth}px;  
        --height: ${contextMenu.scrollHeight}px;  
        --top: ${positionY}px;  
        --left: ${positionX}px;`  
       );  
      });  
     });  
    }  
   }  
   const copyIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" style="margin-right: 7px" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;  
   const cutIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" style="margin-right: 7px" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`;  
   const pasteIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" style="margin-right: 7px; position: relative; top: -1px" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`;  
   const downloadIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" style="margin-right: 7px; position: relative; top: -1px" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;  
   const deleteIcon = `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none" style="margin-right: 7px" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;  
   const menuItems = [  
    {  
     content: `${copyIcon}Copy`,  
     events: {  
      click: (e) => console.log(e, "Copy Button Click")  
      // mouseover: () => console.log("Copy Button Mouseover")  
      // You can use any event listener from here  
     }  
    },  
    { content: `${pasteIcon}Paste` },  
    { content: `${cutIcon}Cut` },  
    { content: `${downloadIcon}Download` },  
    {  
     content: `${deleteIcon}Delete`,  
     divider: "top" // top, bottom, top-bottom  
    }  
   ];  
   const light = new ContextMenu({  
    target: ".target-light",  
    mode: "light", // default: "dark"  
    menuItems  
   });  
   light.init();  
   const dark = new ContextMenu({  
    target: ".target-dark",  
    menuItems  
   });  
   dark.init();  
   // remove message  
   function removeMessage() {  
    const message = document.querySelector(".right-click");  
    if (message) message.remove();  
   }  
   window.addEventListener("click", removeMessage);  
   window.addEventListener("contextmenu", removeMessage);  