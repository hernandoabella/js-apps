const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// get user data
async function getUser(username) {
	try {
		const { data } = await axios(API_URL + username);
		createUserData(data);
		getRepos(username);
	} catch (error) {
		if (error.response.status == 404) {
			createErrorCard("No profile matches your search. Please make sure you have the right username");
		}
		console.log(error);
	}
}

function createUserData(user) {
	const userDetails = `
    <div class="card">
    <div>
        <img src="${user.avatar_url}" class="avatar" alt="${user.name}">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repositories</strong></li>
        </ul>
        <div id="repos"></div>
    </div>
</div>
    `;
	main.innerHTML = userDetails;
}

// get repos
async function getRepos(username) {
	try {
		const { data } = await axios(API_URL + username + "/repos?sort=created");
		createRepoCard(data);
	} catch (error) {
		createErrorCard("Problem fetching repos");
	}
}

function createRepoCard(repos) {
	const reposEl = document.getElementById("repos");
	repos.slice(0, 4).forEach((repo) => {
		const repoEl = document.createElement("a");
		repoEl.classList.add("repo");
		repoEl.href = repo.html_url;
		repoEl.target = "_blank";
		repoEl.innerText = repo.name;

		reposEl.appendChild(repoEl);
	});
}

// error card
function createErrorCard(message) {
	const errorCard = `
    <div class="card">
        <h3>${message}</h3>
    </div>`;
	main.innerHTML = errorCard;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const user = search.value;

	if (user) {
		getUser(user);
		search.value = "";
	}
});
