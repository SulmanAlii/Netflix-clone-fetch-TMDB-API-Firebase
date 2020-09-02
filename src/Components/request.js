export const Api_key = "eb3b2ca24f6cd09bcf790eb23c6c4551";

export const Api_URL = "https://api.themoviedb.org/3/";

export const request = {

    fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
    fetchTrending : `/trending/all/week?api_key=${Api_key}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${Api_key}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchUpcoming : `/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`,
    fetchWeeklyTrending :`/trending/all/week?api_key=${Api_key}`



}


export default request;