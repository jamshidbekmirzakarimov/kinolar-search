const elMoviesList = document.querySelector(".js-movies-list");
const elMoviesTemplate = document.querySelector(".js-movies-temp").content;
const newMoviesFragment = new DocumentFragment();
const elSearchForm = document.querySelector(".js-search-form");
const elSearchFormInput = elSearchForm.querySelector(".js-search-form-input");



//MODAL

const elModalImg = document.querySelector(".js-movies-modal-img");
const elModalTitle = document.querySelector(".js-movies-modal-title");
const elModalDate = document.querySelector(".js-modal-date");
const elModalAboutTitle = document.querySelector(".about-modal-title");
const elModalGenes = document.querySelector(".js-modal-genres");

function renderMovies(films) {
  elMoviesList.innerHTML = null
  films.forEach((film) => {
    const elCloneMovie = elMoviesTemplate.cloneNode(true);
    elCloneMovie.querySelector(".js-movies-img").src = film.poster;
    elCloneMovie.querySelector(".js-movies-title").textContent = film.title;
    elCloneMovie.querySelector(".js-date").textContent = film.release_date;
    elCloneMovie.querySelector(".js-genres").textContent = film.genres.join(", ");
    elCloneMovie.querySelector(".js-movies-temp-btn").dataset.id = film.id;
    
    newMoviesFragment.appendChild(elCloneMovie);
  });
  
  elMoviesList.appendChild(newMoviesFragment);
  
}

function renderModalInfo(findMovie) {
  elModalImg = findMovie.poster;
  elModalTitle = findMovie.title;
  elModalDate = findMovie.release_date;
  elModalAboutTitle = findMovie.overview;
  elModalGenes = findMovie.genres;
}

elMoviesList.addEventListener("click", function (evt) {
  const elmentTarget = evt.target;
  // console.log(elmentTarget);
  const btnId = elmentTarget.dataset.id;
  // console.log(btnId);
  if (elmentTarget.matches(".js-movies-temp-btn")) {
    const foundMovie = films.find((film) => films.id == btnId);
    renderModalInfo(foundMovie);
    console.log(foundMovie);
  }
});

elSearchForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const searchQuery = new RegExp(elSearchFormInput.value, "gi");
  const foundMovies = films.filter((film) => film.title.match(searchQuery));

  if (foundMovies.length > 0) {
    renderMovies(foundMovies);
  } else {
    elMoviesList.innerHTML = "<div class'text-white diplay-2'>Not found movie</div>"
  }
});

renderMovies(films);