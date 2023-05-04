import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../config';
import { apiKey } from '../config';
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from '../components/movies/MovieCard';


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);

    if (!data) return null;
    const { backdrop_path, poster_path, title, genres, overview } = data;


    return (
        <div className="py-10">
            <div className="w-full h-[600px] relative" >
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                <div className="w-full h-full bg-cover bg-no-repeat " style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
                }}>

                </div>
            </div>

            <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} className="w-full h-full object-cover rounded-xl " alt="" />
            </div>
            <h1 className="text-center text-4xl font-bold text-white mb-10"> {title}</h1>
            {genres.length > 0 && <div className="flex items-center justify-center gap-x-5 mb-10">
                {genres.map((item) => (
                    <span className="py-2 px-4 border border-primary text-primary r ounded-md" key={item.id}> {item.name} </span>
                ))}
            </div>}

            <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10"> {overview}</p>

            <MovieCredits></MovieCredits>
            <MovieVideos></MovieVideos>
            <MovieSimilar></MovieSimilar>
        </div>
    );
};


// GET MORE DETAIL LIKE AUTHOR,ACTORS
function MovieCredits() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieCredis(movieId), fetcher);

    if (!data) return null;
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;

    return (
        <div className="mb-10">
            <h2 className="text-center text-3xl mb-10"> Cast</h2>
            <div className="grid grid-cols-4 gap-5">
                {cast.slice(0, 4).map((item) => (
                    <div className="cast-item" key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} className="w-full h-[350px] object-cover rounded-lg mb-3" alt="" />

                        <h3 className="text-xl text-center font-medium"> {item.name} </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

// GET VIDEOS INTRO
function MovieVideos() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMoreVideos(movieId), fetcher);
    if (!data) return null;

    const { results } = data;
    if (!results || results.length <= 0) return null;

    return (
        <div className="py-10">
            <div className="flex flex-col gap-10">
                {results.slice(8, 10).map((item) => (
                    <div className="" key={item.id}>
                        <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block rounded-lg ">{item.name}</h3>
                        <div key={item.id} className="w-full aspect-video">
                            <iframe className="w-full h-full object-fill" width="956" height="538" src={`https://www.youtube.com/embed/${item.key}`} title="Tteokbokki cơm ăn nhẹ tiêu biểu của Hàn Quốc, tempura tuyệt vời, hotteok" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// MOVIE SIMILAR
function MovieSimilar() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getSimilarVideos(movieId), fetcher);
    if (!data) return null;

    const { results } = data;
    if (!results || results.length <= 0) return null;

    return (
        <div className="py-10">
            <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
            <div className="movie-list">
                <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"} >
                    {results.length > 0 && results.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}>
                            </MovieCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
