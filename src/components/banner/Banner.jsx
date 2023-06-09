import React from 'react';
import  useSWR  from "swr";
import { fetcher } from '../../config';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';


const Banner = () => {
    const { data } = useSWR('https://api.themoviedb.org/3/movie/upcoming?api_key=dc162cb708fc5da095dbe5f2cb2c1862&language=en-US&page=1', fetcher);          // fetcher hoạt động trong file config.js 

    const movies = data?.results || [];
    console.log(movies);
    return (
        <section className="banner h-[500px] page-container mb-20 overflow-hidden">
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
                {movies.length > 0 && movies.map((item) => (
                    <SwiperSlide key={item.id}>
                        <BannerItem item={item}></BannerItem>
                    </SwiperSlide>
                ))};
            </Swiper>
        </section>
    );
};


function BannerItem({item}) {
    const {
        poster_path,
        title,
        overview,
        id,
    } = item

    const navigate = useNavigate();

    return (
        <div className="w-full h-full rounded-lg relative">
                <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt=""
                    className="rounded-lg w-full h-full object-cover" />
                <div className="absolute left-5 bottom-5 w-full text-white">
                    <h2 className="font-bold text-3xl mb-5">{title}</h2>
                    <div className="flex items-center gap-x-4 mb-8">
                        <span className="py-2 px-4 border border-white rounded-md">
                            Adventure
                        </span>
                        <span className="py-2 px-4 border border-white rounded-md">
                            Superhero
                        </span>
                        <span className="py-2 px-4 border border-white rounded-md">
                            Wibu
                        </span>
                    </div>
                    <Button bgColor="secondary" onClick={() => navigate(`movie/${id}`)}  className="w-auto"> Watch Now</Button>
                </div>
            </div>
    );
}

export default Banner;