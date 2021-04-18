const navigationBar = document.querySelectorAll('[data-nav-list]');
const addMovieButton = document.querySelector('.movie-list__add-movie');
const movieModal = document.querySelector('.movie__modal-box');
const closeMovieModal = document.querySelector('.close');
//Adding movie into the list
const addMovieToList = document.querySelector('#add-movie');
const movieList = document.querySelector('.movie-system__movie-list');
const selectGenre = document.querySelector('#movie-genre');
const genreLogo = document.querySelector('.add-movie__genre-image');
//Removing the empty message display
const emptyMessage = document.querySelector('.movie-list__empty-item');

//Add movie into the list
const addMovie = () => {
    //Create a new item
    const newMovieItem = document.createElement('div');
    newMovieItem.className = 'movie-list__movie-item';

    //Place of movie description container
    const newMovieDescriptionContainer = document.createElement('div');
    newMovieDescriptionContainer.className = 'movie-description';

    //Place of trash bin for delete
    const trashBin = document.createElement('div');
    trashBin.className = 'trash-icon';
    trashBin.innerHTML = '<i class="fas fa-trash-alt fa-2x"></i>';
    trashBin.addEventListener('click', () => {
       movieList.removeChild(newMovieItem);
       //Display empty message
       displayEmptyMessage();
    }); 

    //Place of logo
    const newMovieLogo = document.createElement('div');
    newMovieLogo.className = 'movie-logo';
    newMovieLogo.innerHTML = changeMovieLogo();
    
    //Movie title
    const newMovieTitle = document.createElement('h2');
    newMovieTitle.textContent = document.querySelector('#movie-name').value;

    //Movie genre
    const newMovieGenre = document.createElement('div');
    newMovieGenre.classList = 'movie-genre';
    newMovieGenre.textContent = document.querySelector('#movie-genre').value;

    //Movie rating
    const newMovieRating = document.createElement('div');
    newMovieRating.className = 'movie-rating';
    newMovieRating.innerHTML = changeMovieRating();

    //Movie description
    const newMovieDescription = document.createElement('p');
    newMovieDescription.textContent = document.querySelector('#movie-description').value;

    //Validation in the add movie form
    if(validation(
        document.querySelector('#movie-name'), 
        document.querySelector('#movie-genre'), 
        document.querySelector('#movie-rating'), 
        document.querySelector('#movie-description')
    )) {
        movieModal.style.display = 'block';
        return;
    }

    //Append the description information inside the container
    newMovieDescriptionContainer.appendChild(newMovieTitle);
    newMovieDescriptionContainer.appendChild(newMovieGenre);
    newMovieDescriptionContainer.appendChild(newMovieRating);
    newMovieDescriptionContainer.appendChild(newMovieDescription);

    //Append the container
    newMovieItem.appendChild(trashBin);
    newMovieItem.appendChild(newMovieLogo);
    newMovieItem.appendChild(newMovieDescriptionContainer)

    //Add the movie list into the container
    movieList.appendChild(newMovieItem);

    //Close modal as the item is listed
    movieModal.style.display = 'none';
    clearFormat(document.querySelector('#movie-name'), 
        document.querySelector('#movie-genre'), 
        document.querySelector('#movie-rating'), 
        document.querySelector('#movie-description')
    );

    //Remove empty message
    displayEmptyMessage();
}

//Change the logo of movie according to genre
const changeMovieLogo = () => {
    const genreLogo = document.querySelector('#movie-genre').value;
    switch(genreLogo) {
        case 'Action':
            return '<i class="fas fa-fighter-jet fa-7x"></i>';
        case 'Comedy':
            return '<i class="far fa-laugh fa-7x"></i>';
        case 'Drama':
            return '<i class="fas fa-theater-masks fa-7x"></i>';
        case 'Horror':
            return '<i class="fas fa-ghost fa-7x"></i>';
        case 'Romance':
            return '<i class="fas fa-heart fa-7x"></i>';
        default:
            return '';
    }
}

//Change the movie ratings
const changeMovieRating = () => {
    const rating = document.querySelector('#movie-rating').value;
    const remainingStar = 5 - rating;
    let starRatings = '';
    for(let i = 0; i < rating; i++) {
        starRatings += '<i class="fas fa-star" style="margin-right: 4px"></i>';
    }
    for(let i = 0; i < remainingStar; i++) {
        starRatings += '<i class="far fa-star" style="margin-right: 4px"></i>';
    }
    return starRatings;
}

//Validation of forms
const validation = (title, genre, rating, description) => {
    let hasErrors = false; 
    //Naming validation
    if(title.value === undefined || title.value === '') {
        title.style.borderColor = 'red';
        hasErrors = true;
    }
    else {
        title.style.borderColor = 'white';
    }

    //Genre validation
    if(genre.options[genre.selectedIndex].value === 'None') {
        genre.style.borderColor = 'red';
        hasErrors = true;
    }
    else {
        genre.style.borderColor = 'white';
    }

    //Rating validation
    if(rating.options[rating.selectedIndex].value === 'None') {
        rating.style.borderColor = 'red';
        hasErrors = true;
    }
    else {
        rating.style.borderColor = 'white';
    }

    //Description validation
    if(description.value === undefined || description.value === '') {
        description.style.borderColor = 'red';
        hasErrors = true;
    }
    else {
        description.style.borderColor = 'white';
    }

    //Return if it has errors
    return hasErrors;
}

//Clear error formatting as the movie item is sent
const clearFormat = (title, genre, rating, description) => {
    //Remove image 
    genreLogo.innerHTML ='';

    //Default border colors
    title.style.borderColor = 'white';
    genre.style.borderColor = 'white';
    rating.style.borderColor = 'white';
    description.style.borderColor = 'white';

    //Clear all values
    title.value = '';
    genre.value = 'None';
    rating.value = 'None';
    description.value = '';
}

//Whether to display the empty message or not depending on the number of movies
const displayEmptyMessage = () => movieList.childElementCount <= 2 ? emptyMessage.style.display = 'block' : emptyMessage.style.display = 'none';


//Filter out all movies by genre
const filterMovies = chosenGenre => {
    const movieItem = Array.from(document.querySelectorAll('.movie-list__movie-item'));
    let selectedGenre = [];

    movieItem.forEach(movie => movie.style.display = 'flex');
    switch(chosenGenre) {
        case 'Action':
            selectedGenre = movieItem.filter(movie => movie.children[2].children[1].textContent !== 'Action');
            break;
        case 'Comedy':
            selectedGenre = movieItem.filter(movie => movie.children[2].children[1].textContent !== 'Comedy');
            break;
        case 'Drama':
            selectedGenre = movieItem.filter(movie => movie.children[2].children[1].textContent !== 'Drama');
            break;
        case 'Horror':
            selectedGenre = movieItem.filter(movie => movie.children[2].children[1].textContent !== 'Horror');
            break;
        case 'Romance':
            selectedGenre = movieItem.filter(movie => movie.children[2].children[1].textContent !== 'Romance');
            break;
        default:
            break;
    }
    selectedGenre.forEach(movie => movie.style.display = 'none');
}

//Navigation bar setting to active whenever clicked
navigationBar.forEach(navigation => {
    navigation.addEventListener('click', e => {
        filterMovies(navigation.textContent);
        const active = document.querySelector('.active');
        active.classList.remove('active');
        navigation.classList.add('active');
    });
});

//For opening of modal box
addMovieButton.addEventListener('click', () => {
    movieModal.style.display = 'block';
});

//When closing of modal box through x icon
closeMovieModal.addEventListener('click', () => {
    movieModal.style.display = 'none';
});

//Add movie modal submit button
addMovieToList.addEventListener('click', e => {
    addMovie(); //Add movies
});

//Selecting genre and changing its logo in modal 
selectGenre.addEventListener('change', e => {
    genreLogo.innerHTML = changeMovieLogo();
});

//Whenever the user clicks outside the modal
window.addEventListener('click', e => {
    if(e.target === movieModal) { //If the user clicks outside the modal content
        movieModal.style.display = 'none';
    }
});