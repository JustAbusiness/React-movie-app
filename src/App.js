import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import MovieList from "./components/movies/MovieList";
import "swiper/scss";
import MovieCard from "./components/movies/MovieCard";
import MovieRated from "./components/movies/MovieRated";
import MovieTrending from "./components/movies/MovieTrending";


function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary"> Home </span>
        <span> Movies</span>
        <span> About </span>
      </header>

      <section className="banner h-[400px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
            alt=""
            className="rounded-lg w-full h-full object-cover" />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5"> Avengers: Endgame</h2>
            <div className="flex items-center gap-x-4 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Superhero
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary hover:bg-pink-400 text-white font-medium"> Watch Now</button>
          </div>
        </div>
      </section>

      {/* NOW PLAYING  */}
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-10 font-semibold text-2xl"> Now Playing</h2>
        <MovieList></MovieList>
      </section>

      {/* TOP RATED */}
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-10 font-semibold text-2xl"> Top Rated</h2>

        <MovieRated></MovieRated>
      </section>

      {/* TRENDING */}
      <section className="movies-layout page-container-fluid pb-20">
        <div className="flex items-center">
          <h2 className="capitalize text-white mb-10 font-semibold text-2xl"> Trending </h2>
          <span className="mb-9 ml-3" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff0000" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          </span>
          <span className="mb-9 ml-3" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff0000" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          </span>
          <span className="mb-9 ml-3" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff0000" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          </span>
        </div>
        
        <MovieTrending></MovieTrending>
       
      </section>

    </Fragment>
  );
}

export default App;
