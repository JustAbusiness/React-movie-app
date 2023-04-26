import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard from './MovieCard'
import useSWR from "swr";
import { fetcher } from '../../config';


// API Link:   https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>

const MovieList = () => {
    const { data, error, isLoading } = useSWR('https://api.themoviedb.org/3/movie/now_playing?api_key=dc162cb708fc5da095dbe5f2cb2c1862&language=en-US&page=1', fetcher);          // fetcher hoạt động trong file config.js 
    const [movies, setMovies] = useState([]); 
    useEffect(() => {
        setMovies(data.results)
    },[data])
    
    console.log(movies);
    // if (error) return <div className="text-red-700 font-semibold"> Failed to connect ! </div>
    // if (isLoading) return <div className="text-green-600 font-semibold"> Loading ... </div>
    
    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"} >
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>

                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>

                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>

                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>

                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>

                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default MovieList;