var imgs = [  
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=50',  
    'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=50',  
    'https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=50',  
    'https://images.unsplash.com/photo-1502657877623-f66bf489d236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=50',  
    'https://images.unsplash.com/photo-1506361797048-46a149213205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=50'  
   ],  
   n = imgs.length,  
   current = n-1,  
   closedWidth = Math.floor(window.innerWidth/10)  
   for (var i=0; i<n; i++){  
   var bgImg = document.createElement('div');  
   bg.appendChild(bgImg);  
   gsap.set(bgImg, {  
   attr:{id:'bgImg'+i, class:'bgImg'},  
   width:'100%',  
   height:'100%',  
   backgroundImage:'url('+imgs[i]+')',  
   backgroundSize:'cover',  
   backgroundPosition:'center'  
   })  
   var b = document.createElement('div');  
   fg.appendChild(b);  
   gsap.fromTo(b, {  
   attr:{id:'b'+i, class:'box'},  
   innerHTML:'<p><sub>Fig.</sub> '+(i+1)+'</p>',  
   width:'100%',  
   height:'100%',  
   borderLeft:(i>0)?'solid 1px #eee':'',  
   backgroundColor:'rgba(250,250,250,0)',  
   left:i*closedWidth,  
   transformOrigin:'100% 100%',  
   x:'100%'  
   },{  
   duration:i*0.15,  
   x:0,  
   ease:'expo.inOut'  
   })   
   b.onmouseenter = b.onclick = (e)=>{    
   if (Number(e.currentTarget.id.substr(1))==current) return;  
   var staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)));  
   current = Number(e.currentTarget.id.substr(1));  
   gsap.to('.box', {  
    duration:0.5,  
    ease:'elastic.out(0.3)',  
    left:(i)=>(i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth),  
    x:0,  
    stagger: staggerOrder? 0.05:-0.05  
   })  
   bg.appendChild( document.getElementById('bgImg'+current) )  
   gsap.fromTo('#bgImg'+current, {opacity:0}, {opacity:1, duration:0.3, ease:'power1.inOut'})  
   gsap.fromTo('#bgImg'+current, {scale:1.05, rotation:0.05}, {scale:1, rotation:0, duration:1.5, ease:'sine'})   
   }  
   }  
   window.onresize = (e)=>{  
   closedWidth = Math.floor(window.innerWidth/10)  
   gsap.set('.box', { x:0, left:(i)=> (i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth) })  
   }  