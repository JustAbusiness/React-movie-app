import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import { fetcher } from '../config';
import MovieCard from '../components/movies/MovieCard';
import useDebounce from './../hooks/useDebounce';
import ReactPaginate from 'react-paginate';


// const pageCount = 5;
const itemsPerPage = 20;

const MoviePage = () => {
    const [nextPage, setNextPage] = useState(1);
    // CHỨC NĂNG TÌM KIẾM MOVIES
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=dc162cb708fc5da095dbe5f2cb2c1862&language=en-US&page=${nextPage}`)
    const filterDebounce = useDebounce(filter, 500);
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    // FETCH API 
    const { data, error } = useSWR(url, fetcher);
    const loading = !data && !error;        // THIẾT LẬP LOADING 

    useEffect(() => {
        if (filterDebounce) {
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=dc162cb708fc5da095dbe5f2cb2c1862&query=${filterDebounce}&page=${nextPage}`)    // API khi search 

        } else {
            setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=dc162cb708fc5da095dbe5f2cb2c1862&page=${nextPage}`)   // API sẵn
        }

    }, [filterDebounce, nextPage])

    const movie = data?.results || [];
    const noMovie = !loading && movie.length === 0;    // THIẾT LẬP NO MOVIE DATA


    // PHÂN TRANG LỌC PAGINATE
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        if (!data || !data.total_results) return;
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data, itemOffset])
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total_results;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };


    return (
        <div className="py-10 page-cotainer">
            <div className="flex mb-10">
                <div className="flex-1">
                    <input onChange={handleFilterChange} type="text" className="w-full p-4 bg-slate-800 rounded-lg outline-none text-white font-medium" placeholder="Searching movie..." />
                </div>

                <button className="p-4 bg-primary rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>

            {noMovie && <h2 className="text-center font-medium text-4xl ">No movies in the list :(( </h2>}
            {loading && <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>}

            <div className="grid grid-cols-4 gap-10 mb-10 ">
                {!loading && movie.length > 0 && movie.map((item) => (
                    <MovieCard key={item.id} item={item}></MovieCard>
                ))}
            </div>

            {/* PHÂN TRANG LỌC PAGINATE */}
            {!noMovie &&
                <div className="mt-10">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        className="pagination"
                    />
                </div>
            }
            {/* PHÂN TRANG  */}
            {/* {!noMovie &&
                <div className="flex items-center justify-center gap-x-5 hidden">

                    <span className="cursor-pointer" onClick={() => setNextPage(nextPage - 1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    </span>

                    {new Array(pageCount).fill(0).map((item, index) => (            // CHỨC NĂNG PHÂN TRANG 
                        <span className="cursor-pointer p-3  inline-block leading-none bg-white text-slate-900 rounded-lg hover:underline" onClick={() => setNextPage(index + 1)} >
                            {index + 1}
                        </span>
                    ))}

                    <span className="cursor-pointer" onClick={() => setNextPage(nextPage + 1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    </span>
                </div>
            } */}
        </div>
    );
};

export default MoviePage;