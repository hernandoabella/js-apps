$(function(){

    //paintingerasing or not
    var paint = false; 
    //painting or erasing
    var paint_erase="paint";
    //get the canvas and context
    var canvas = document.getElementById("paint");
    var ctx = canvas.getContext("2d");
    //get the canvas container
    var container =$("#canvasContainer");
    //mouse position
    var mouse= {x:0, y:0};

    //load saved work from local storage
    if (localStorage.getItem("imgCanvas")!= null){
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img, 0,0);
        }
        img.src = localStorage.getItem("imgCanvas");
    }

    //set drawing parameters(lineWidth, lineJoin, lineCup)
    ctx.lineWidth=3;
    ctx.lineJoin="round";
    ctx.lineCap="round";

    //click inside container
    container.mousedown(function(e){
        paint = true;
        ctx.beginPath();

        //mouse coordinate inside of the container
        mouse.x = e.pageX - this.offsetLeft; //distance between mouse and left border of page minus distance from the page left border to canvas

        mouse.y = e.pageY - this.offsetTop; 
        ctx.moveTo(mouse.x, mouse.y);    
    });

    //move the mouse while holding mouse key
    container.mousemove(function(e){
        mouse.x = e.pageX - this.offsetLeft; 
        mouse.y = e.pageY - this.offsetTop;
        if(paint==true){
            if(paint_erase=="paint"){
                // get color input
                ctx.strokeStyle=$("#paintColor").val();
            }
            else
            {
                //white color
                ctx.strokeStyle="white";
            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }

    });

    //mouse up-- not paintingerasing anymore
    container.mouseup(function(){
        paint = false;
    });

    //if we leave the container we are not paintingerasing anymore
    container.mouseleave(function(){
        paint = false;
    });

    //click on the reset button
    $("#reset").click(function(){
        //clear canvas
        ctx.clearRect(0,0, canvas.width, canvas.height);
        paint_erase="paint";
        $("#erase").removeClass("eraseMode");    
    });

    //click on the save button
    //save on user's browser
    $("#save").click(function(){

        if(typeof(localStorage)!= null)
        {//check if the browser supports localStorage
            //store data 
            localStorage.setItem("imgCanvas", canvas.toDataURL());
        }
        else{
            window.alert("Your browser does not support local storage");}
    });

    //click on the erase button
    $("#erase").click(function(){
        if(paint_erase=="paint"){
            paint_erase="erase";
        }
        else{
            paint_erase="paint";
        }
        $(this).toggleClass("eraseMode");
    });

    //change color input
    $("#paintColor").change(function(){
        $("#circle").css("background-color", $(this).val());
    });

    //change lineWidth using slider
    $("#slider").slider({
        //slider values for changing cicrle size
        min: 3,
        max: 30,
        slide:function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
            //correspond to selected line thickeness
            ctx.lineWidth = ui.value;
        }
    });

});