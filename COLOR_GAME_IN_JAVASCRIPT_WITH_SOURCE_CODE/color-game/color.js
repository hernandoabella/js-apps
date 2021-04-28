var blocks = document.querySelectorAll(".square");
var rField = document.getElementById("r");
var gField = document.getElementById("g");
var bField = document.getElementById("b");
var result = document.querySelector("h2"); //to show wrong or right
var aRed, aBlue, aGreen, red, green, blue; //a<Color> refers to answer color
var correctColor = Math.floor(Math.random() * 6); // storing correct block number
var data = []; // to store all the blocks rgb color as objects
var isCorrect = document.querySelector("h2");
var count=1;
var f=0;
var s="";
var t="";
var reset = document.querySelector("#reset");
var num = 0;
function changeBackground(tile)
{
    // generating random colors using Math.random() * (max - min) + min
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    tile.style.background = "rgb("+red+","+green+","+blue+")";
    //changing block background color
    data.push({redVal: red, greenVal: green, blueVal: blue});
}

var i;
for(i=0 ; i<6; i++)
{
    changeBackground(blocks[i]);
    blocks[i].addEventListener("click", function(){
        num+=1;
        if(this.style.background===blocks[correctColor].style.background)
        {
            f=1;
            if(count==1)
            {
                s="You are a Pro!!";
                t="st try."
            }
            else if(count==2)
            {
                s="You are Color Guru!!";
                t="nd try."
            }
            else if(count==3)
            {
                s="Excellent!!";
                t="rd try."
            }
            else if(count==4)
            {
                s="Good!!";
                t="th try."
            }
            else if(count==5)
            {
                s="You were Lucky!!";
                t="th try."
            }
            isCorrect.textContent=s+"You guessed it in "+count+t;
             reset.classList.remove("hide");
            for(var j=0; j<blocks.length; j++)
                {
                    blocks[j].style.background=blocks[correctColor].style.background;
                }
        }
        else if(count==5)
        {
            isCorrect.textContent="You lost !!";
            for(var k=0; k<blocks.length; k++)
                {
                blocks[k].style.background=blocks[correctColor].style.background;
                }
            reset.classList.remove("hide");
        }
        else
        {
            isCorrect.textContent="Oops! That is wrong...";
            this.style.background="white";
            if(f!=1)
                count++;
        }
        });
}
var s=data[correctColor].redVal+data[correctColor].blueVal+data[correctColor].greenVal;
a=data[correctColor].redVal/s*100;
b=data[correctColor].blueVal/s*100;
c=data[correctColor].greenVal/s*100;
rField.textContent=Math.round(a);
bField.textContent=Math.round(b);
gField.textContent=Math.round(c);
