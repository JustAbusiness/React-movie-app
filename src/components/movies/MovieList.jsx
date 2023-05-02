import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from './MovieCard'
import useSWR from "swr";
import { fetcher } from '../../config';


// API Link:   https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>

const MovieList = () => {
    const { data, error, isLoading } = useSWR('https://api.themoviedb.org/3/movie/now_playing?api_key=dc162cb708fc5da095dbe5f2cb2c1862&language=en-US&page=1', fetcher);          // fetcher hoạt động trong file config.js 
   
    const movies = data?.results || [];

    // console.log(movies);
    // if (error) return <div className="text-red-700 font-semibold"> Failed to connect ! </div>
    // if (isLoading) return <div className="text-green-600 font-semibold"> Loading ... </div>

    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"} >
                {movies.length > 0 && movies.map((item) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard item={item}>
                        </MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieList;