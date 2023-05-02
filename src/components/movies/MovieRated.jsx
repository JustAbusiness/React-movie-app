import React, { useEffect, useState } from 'react';
import {SwiperSlide, Swiper} from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import {fetcher} from "../../config";
import MovieCard from './MovieCard';

const MovieRated = () => {
    const {data} = useSWR('https://api.themoviedb.org/3/movie/top_rated?api_key=dc162cb708fc5da095dbe5f2cb2c1862&language=en-US&page=1', fetcher);

    const [movieRate, setMovieRate] = useState([]);
    useEffect(() => {
        if (data && data.results) setMovieRate(data.results);
    }, [data])
   

    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"} >
                {movieRate.length > 0 && movieRate.map((item) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard item={item}>
                        </MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieRated;