// TMDB
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62a09552b9e2ff60d0736751fe59ad91";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(movies) {
  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("category-item");

    movieEl.innerHTML = `
            <img src="${IMG_URL + movie.poster_path}" alt="${
      movie.title
    }" class="category-img" />
            <div class="category-info">
                <h2 class="category-name">${movie.title}</h2>
                <p class="category-year">(${movie.release_date})</p>
            </div>
        `;
    document.querySelector(".category-gallery").appendChild(movieEl);
  });
}

getMovies(API_URL);
