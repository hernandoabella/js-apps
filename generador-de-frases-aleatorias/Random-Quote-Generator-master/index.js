url = "https://type.fit/api/quotes";

function hndlbtnclick() {
  console.log("btnclkd");
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      // get random data between 0-100
      var x = Math.floor(Math.random() * 100 + 1);
      // console.log(data[x].author);
      // console.log(data[0]);
      var author = document.getElementById("h4");
      var quotes = document.getElementById("p");
      author.innerHTML = "Author - " + data[x].author;
      quotes.innerHTML = data[x].text;
    });

}


document.getElementById("btn").addEventListener("mouseenter",function (param) {this.style.background="black"  });
document.getElementById("btn").addEventListener("mouseleave",function (param) {this.style.background="#56808f"  });
document.getElementById("btn").addEventListener("click",hndlbtnclick);
