const API_KEY = "76092255094f42d113219df9cd6d44b0";
const base_url = "https://api.themoviedb.org/3";
export const trendingUrl = () => 
  `${base_url}/trending/all/week?api_key=${API_KEY}&language=en-US`;

export const netflixOriginalsUrl = () => 
  `${base_url}/discover/tv?api_key=${API_KEY}&with_networks=213`;

export const topRatedUrl = () => 
  `${base_url}/movie/top_rated?api_key=${API_KEY}&language=en-US`;

export const actionMoviesUrl = () => 
  `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=28`;

export const comedyMoviesUrl = () => 
  `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=35`;

export const horrorMoviesUrl = () => 
  `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=27`;

export const romanceMoviesUrl = () => 
  `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=10749`;

export const documentariesUrl = () => 
  `${base_url}/discover/movie?api_key=${API_KEY}&with_genres=99`;

