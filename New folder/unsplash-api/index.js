const API_key = "563492ad6f917000010000019e38357ea9604a3d98fb3b29bbef78d3";
const url = "https://api.pexels.com/v1/curated?per_page=20&page=1";

// selection from DOM
const searchInput = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");
const gallery = document.querySelector(".gallery");
const form = document.querySelector(".form");
const more = document.querySelector(".more");

// variables
let search;
let page = 1;
let fetchLink;
let currentSearch;

// value for search field
searchInput.addEventListener("input", inputUpdate);
function inputUpdate(e) {
	search = e.target.value;
}

// form functionality
form.addEventListener("submit", (e) => {
	e.preventDefault();
	currentSearch = search;
	searchPhotos(search);
});

// load more
more.addEventListener("click", loadMore);

// fetch  API
async function fetchAPI(url) {
	const dataFetch = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: API_key,
		},
	});
	const data = await dataFetch.json();
	return data;
}

// curated photos
async function curatedPhotos() {
	fetchLink = "https://api.pexels.com/v1/curated?&per_page=20&page=1";
	const data = await fetchAPI(fetchLink);
	generatePictures(data);
}

// search particular photos
async function searchPhotos(query) {
	clearGallery();
	fetchLink = `https://api.pexels.com/v1/search?query=${query}&per_page=20&page=1`;
	const data = await fetchAPI(fetchLink);
	generatePictures(data);
}

// generate HTML
function generatePictures(data) {
	data.photos.forEach((photo) => {
		const galleryImg = document.createElement("div");
		galleryImg.classList.add("photo");

		// photo element
		galleryImg.innerHTML = `
            <img src=${photo.src.large}  alt=${photo.photographer}/>
            <p class="name">${photo.photographer}</p>
            <div class="photo-info">
                <a href=${photo.photographer_url} target="_blank" class="name">More photos</a>
                <a href=${photo.src.original} target="_blank" class="download">Download</a>
            </div>
        `;
		gallery.appendChild(galleryImg);
	});
}

// clear gallery on search
function clearGallery() {
	gallery.innerHTML = "";
	searchInput.value = "";
}

// load more content
async function loadMore() {
	page++;
	if (currentSearch) {
		fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=20&page=${page}`;
	} else {
		fetchLink = `https://api.pexels.com/v1/curated?&per_page=20&page=${page}`;
	}
	const data = await fetchAPI(fetchLink);
	generatePictures(data);
}

curatedPhotos();