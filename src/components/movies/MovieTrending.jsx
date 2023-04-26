import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { fetcher } from '../../config';

const MovieTrending = () => {
    const { data } = useSWR('https://api.themoviedb.org/3/trending/all/day?api_key=dc162cb708fc5da095dbe5f2cb2c1862', fetcher);

    const [movieTrending, setMovieTrending] = useState([]);

    useEffect(() => {
        if (data && data.results) setMovieTrending(data.results);
    }, [data])


    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"} >
                {movieTrending.length > 0 && movieTrending.map((item) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard item={item} >
                        </MovieCard>
                    </SwiperSlide>
                    ))};
            </Swiper>
        </div>
    );
};

export default MovieTrending;