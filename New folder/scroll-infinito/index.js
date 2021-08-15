// selectors
const filter = document.getElementById("filter");
const postContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");

let page = 1;
let limit = 4;

// event listeners
async function fetchPosts() {
	const postFetch = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
	const response = await postFetch.json();
	console.log(response);
	generatePosts(response);
}

// functions
function generatePosts(posts) {
	posts.forEach((post) => {
		const postEl = document.createElement("div");
		postEl.classList.add("post");
		postEl.innerHTML = `
        <div class="number">${post.id}</div>
            <div class="post-info">${post.title}</div>
            <p class="post-body">${post.body}. </p>
        `;
		postContainer.appendChild(postEl);
	});
}

// load more content
function showLoading() {
	loading.classList.add("show");
	setTimeout(() => {
		loading.classList.remove("show");

		setTimeout(() => {
			page++;
			fetchPosts();
		}, 1500);
	}, 500);
}

// infinite scrolling
window.addEventListener("scroll", () => {
	const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
	if (scrollTop + clientHeight >= scrollHeight - 5) {
		showLoading();
	}
});

fetchPosts();
