
export const fetcher = (...args) => fetch(...args).then(res => res.json());
export const tmbdEndpoint = "https://api.themoviedb.org/3/movie";
export const apiKey = "dc162cb708fc5da095dbe5f2cb2c1862";

export const tmdbAPI =  {
   
    getMovieList: (type) => `${tmbdEndpoint}/${type}?api_key=${apiKey}`,
    getMovieDetails: (movieId) => `${tmbdEndpoint}/${movieId}?api_key=${apiKey}`,
    getMovieCredis: (movieId) => `${tmbdEndpoint}/${movieId}/credits?api_key=${apiKey}`,
    getMoreVideos: (movieId) => `${tmbdEndpoint}/${movieId}/videos?api_key=${apiKey}`,
    getSimilarVideos: (movieId) => `${tmbdEndpoint}/${movieId}/similar?api_key=${apiKey}`,


};