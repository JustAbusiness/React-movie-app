import React, { Fragment } from 'react';
import MovieList from "../components/movies/MovieList.jsx";
import MovieTrending from "../components/movies/MovieTrending.jsx";
import MovieRated from "../components/movies/MovieRated.jsx";


const HomePage = () => {
    return (
        <Fragment>

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
};

export default HomePage;