const elMoviesList = document.querySelector(".js-movies-list");
const elMoviesTemplate = document.querySelector(".js-movies-temp").content;
const newMoviesFragment = new DocumentFragment();
const elSearchForm = document.querySelector(".js-search-form");
const elSearchFormInput = elSearchForm.querySelector(".js-search-form-input");


//MODAL

const elModalImg = document.querySelector(".js-movies-modal-img");
const elModalID = document.querySelector(".js-id-modal");
const elModalTitle = document.querySelector(".js-movies-modal-title");
const elModalDate = document.querySelector(".js-modal-date");
const elModalAboutTitle = document.querySelector(".about-modal-title");
const elModal = document.querySelector(".js-modal-genres");

function renderModal(films) {
  films.forEach((film) => {
    const elCloneMovie = elMoviesTemplate.cloneNode(true);
    elCloneMovie.querySelector(".js")
  })
}