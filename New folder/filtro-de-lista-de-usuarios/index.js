//selectors
const filer = document.getElementById("filter");
const resultsDiv = document.getElementById("result");
let listItems = [];

// event listeners
filter.addEventListener("input", (e) => {
	filterData(e.target.value);
});

// functions
async function getData() {
	const response = await fetch("https://randomuser.me/api?results=48");
	const { results } = await response.json();

	resultsDiv.innerHTML = "";
	results.forEach((user) => {
		const listEl = document.createElement("li");
		listItems.push(listEl);

		listEl.innerHTML = `
            <img src="${user.picture.medium}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
		resultsDiv.appendChild(listEl);
	});
}

// filter data
function filterData(query) {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(query.toLowerCase())) {
			item.classList.remove("hide");
		} else {
			item.classList.add("hide");
		}
	});
}

getData();
