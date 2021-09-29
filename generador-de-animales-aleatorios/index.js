const catResult = document.getElementById("cat_result");
const dogResult = document.getElementById("dog_result");
const catBtn = document.getElementById("cat_btn");
const dogBtn = document.getElementById("dog_btn");

// apis
const CAT_API = "https://aws.random.cat/meow";
const DOG_API = "https://random.dog/woof.json";

// generate random dog
dogBtn.addEventListener(
	"click",
	(getRandomDog = () => {
		fetch(DOG_API)
			.then((response) => response.json())
			.then((data) => {
				if (data.url.includes(".mp4")) {
					getRandomDog();
				} else {
					dogResult.innerHTML = `<img src="${data.url}"/>`;
				}
			});
	}),
);

// random cat
catBtn.addEventListener(
	"click",
	(getRandomCat = () => {
		fetch(CAT_API)
			.then((response) => response.json())
			.then((data) => {
				catResult.innerHTML = `<img src="${data.file}" />`;
			});
	}),
);
