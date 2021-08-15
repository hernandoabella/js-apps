const API_URL = "https://api.github.com/users/";
const clientID = "Iv1.7ed151751b0a13aa";
const API_Key = "x7c5740mnqHRmhgV+XCj2Cewh+WraNtn/CMwfaiJST0";

// selectors
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// get api data
async function getUsers(username) {
	try {
		const { data } = await axios(API_URL + username);
		createUserCard(data);
		getRepos(username);
	} catch (error) {
		if (error.response.status == 404) {
			errorMsg("No profile matches your search. Please check username again");
		}
		console.log(error);
	}
}

//display user details
function createUserCard(user) {
	const cardHTML = `<div class="card">
    <div>
        <img src="${user.avatar_url}" class="avatar" alt="${user.name}">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers}<strong> Followers</strong></li>
            <li>${user.following}<strong> Following</strong></li>
            <li>${user.public_repos}<strong> Repositories</strong></li>
        </ul>
        <div id="repos"></div>
    </div>
</div>`;
	main.innerHTML = cardHTML;
}

// collect repositories
async function getRepos(username) {
	try {
		const { data } = await axios(API_URL + username + "/repos?sort=created");
		createRepoEl(data);
	} catch (error) {
		errorMsg("problem loading repositories");
	}
}

// repository element
function createRepoEl(repos) {
	const reposEl = document.getElementById("repos");

	repos.slice(0, 5).forEach((repo) => {
		const repoEl = document.createElement("a");

		repoEl.classList.add("repo");
		repoEl.href = repo.html_url;
		repoEl.target = "_blank";
		repoEl.innerText = repo.name;

		reposEl.appendChild(repoEl);
	});
}

// error messages
function errorMsg(message) {
	const errorCard = `
    <div>
        <p>${message}</p>
    </div>`;
	main.innerHTML = errorCard;
}

// search
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const user = search.value;

	if (user) {
		getUsers(user);
		search.value = "";
	}
});
