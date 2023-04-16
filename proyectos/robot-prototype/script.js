onload = () => {

    // music
    const music = document.getElementById("music")
    
    // robot container
    const robotContainer = document.getElementsByClassName("robot__container")[0]
    
    const innerLeftEye = document.getElementsByClassName("inner__left__eye")[0]
    const innerRightEye = document.getElementsByClassName("inner__right__eye")[0]
    
    // function builder
    const myFunction = () => {
        //...
        
        // variables 
        const funBtn = document.getElementById("funBtn")
        
        
        robotContainer.style.animation = "animation1 1s 2s infinite"
        innerLeftEye.style.animation = "evilEye 1s  infinite"
        innerRightEye.style.animation = "evilEye 1s infinite"
        
        setTimeout(() => {
            playMusic()
            randomColor()
            innerLeftEye.style.animation = "none"
            innerRightEye.style.animation = "none"
            funBtn.style.display = "none"
        }, 2000)
        
    }
    
    const playMusic = () => {
        document.getElementById("music").play()
    }
    
    const randomColor = () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16)
        document.body.style.background = "#" + randomColor
    }
    
    // timer function
    const myFunction2 = () => {
        //...
        setInterval(myFunction, 1000)
        
    }
    
    
    funBtn.addEventListener("click", myFunction2)
    
    
}