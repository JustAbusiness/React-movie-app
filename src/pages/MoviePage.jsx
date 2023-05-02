import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import { fetcher } from '../config';
import MovieCard from '../components/movies/MovieCard';

//https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1

const MoviePage = () => {
    const { data } = useSWR('https://api.themoviedb.org/3/movie/popular?api_key=dc162cb708fc5da095dbe5f2cb2c1862&language=en-US&page=3', fetcher);

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        if (data && data.results) setMovie(data.results);
    }, [data])

    return (
        <div className="py-10 page-cotainer">
            <div className="flex mb-10">
                <div className="flex-1">
                    <input type="text" className="w-full p-4 bg-slate-800 rounded-lg outline-none text-white font-medium" placeholder="Searching movie..." />
                </div>

                <button className="p-4 bg-primary rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-4 gap-10">
                {movie.length > 0 && movie.map((item) => (
                    <MovieCard key={item.id} item={item}></MovieCard>
                ))};
            </div>
        </div>
    );
};

export default MoviePage;