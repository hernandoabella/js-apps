let weather = {
    "apiKey": "e2c1d873e17655abe9c9bdf6946db59d",
    fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apiKey)
    .then((response)=>response.json())
    .then((data)=>this.displayWeather(data));
    },
    displayWeather: function (data) {
    const {name}=data;
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    // console.log(name,description,icon,temp,humidity,speed);
    document.querySelector(".city").innerText="Weather in " + name;
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp + "°C";
    document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
    document.querySelector(".wind").innerText="Wind Speed: "+speed+" km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?"+ name +")";
    },
    search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
    }
    };