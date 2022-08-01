const KEY = 'cdeffe013ca7b4d45618860232929251';
const BASE_URL = 'https://api.themoviedb.org/3';

// Endpoints
const trendMovies = '/trending/movie/day'; // Популярні
const searchMovie = '/search/movie'; // Пошук фільму
const movieDetails = '/movie/{movie_id}'; // Деталі про фільм
const movieCredits = '/movie/{movie_id}/credits'; // Акторський склад фільму
const movieReviews = '/movie/{movie_id}/reviews'; // Відгуки про фільм

export const getTrendMovies = async () => {
  const films = await fetch(`${BASE_URL}${trendMovies}?api_key=${KEY}`)
    .then(resp => resp.json())
    .then(data => data.results);

  //   console.log(films);
  return films;
};
