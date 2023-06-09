import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from './MovieCard'
import useSWR from "swr";
import { fetcher, tmdbAPI } from '../../config';


// API Link:   https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>

const MovieList = ({type = "now_playing"}) => {
    const { data, error, isLoading } = useSWR(tmdbAPI.getMovieList(type), fetcher);          // fetcher hoạt động trong file config.js 
   
    const movies = data?.results || [];

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