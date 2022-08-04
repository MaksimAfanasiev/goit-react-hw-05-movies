const KEY = 'cdeffe013ca7b4d45618860232929251';
const BASE_URL = 'https://api.themoviedb.org/3';

// Endpoints
const trendMovies = '/trending/movie/day'; // Популярні
const searchMovies = '/search/movie'; // Пошук фільму
const movieDetails = '/movie/'; // Деталі про фільм
// const movieCredits = '/movie/{movie_id}/credits'; // Акторський склад фільму
// const movieReviews = '/movie/{movie_id}/reviews'; // Відгуки про фільм

//Трендові фільми

export const getTrendMovies = async () => {
  const films = await fetch(`${BASE_URL}${trendMovies}?api_key=${KEY}`)
    .then(resp => resp.json())
    .then(data => data.results);

  //   console.log(films);
  return films;
};

// Пошук фільмів за ключовим словом

export const getMovies = async query => {
  const films = await fetch(
    `${BASE_URL}${searchMovies}?api_key=${KEY}&query=${query}`
  )
    .then(resp => resp.json())
    .then(data => data.results);

  return films;
};

// Запит повної інформації про фільм

export const getMovieDetails = async id => {
  const filmDetails = await fetch(
    `${BASE_URL}${movieDetails}${id}?api_key=${KEY}`
  )
    .then(resp => resp.json())
    .then(movie => {
      const normalizedGenres = movie.genres.map(genre => genre.name);

      const newMovie = { ...movie, genres: normalizedGenres };

      return newMovie;
    });

  return filmDetails;
};

export const getCredits = async id => {
  const credits = await fetch(
    `${BASE_URL}${movieDetails}${id}/credits?api_key=${KEY}`
  )
    .then(resp => resp.json())
    .then(data => data.cast);

  return credits;
};

export const getReviews = async id => {
  const reviews = await fetch(
    `${BASE_URL}${movieDetails}${id}/reviews?api_key=${KEY}`
  )
    .then(resp => resp.json())
    .then(data => data.results);

  return reviews;
};
