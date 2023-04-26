import React from 'react';
import PropTypes from 'prop-types';


const MovieCard = ({ item }) => {
    const {
        backdrop_path,
        title,
        name,
        vote_average,   
        release_date,
        first_air_date,
        overview,
    } = item

    return (
        <div className="movies-card flex flex-col rounded-lg p-3 bg-slate-800 hover:bg-gray-700 duration-150 select-none" >
            <img className="w-full h-[250px] rounded-lg object-cover mb-5" src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" />
            <div className="flex flex-col flex-1">
                <h3 className="font-semibold text-base mb-3 text-start whitespace-nowrap overflow-hidden "> {title || name} </h3>
                <div className="flex items-center justify-between text-sm opacity-50 mb-5">
                    <span className="year-released"> { new Date(release_date).getUTCFullYear() || new Date(first_air_date).getUTCFullYear() }</span>
                    <span className="ml-auto mr-1"> {vote_average} </span>
                    <span className="items-center"> <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="yellow"
                        className="mr-1 h-4 w-4 text-warning">
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd" />
                    </svg> </span>
                </div>
                <p className="italic whitespace-pre-wrap overflow-hidden text-ellipsis text-sm py-4 h-[100px] mb-5"> {overview}</p>    
                {/* <p className="italic overflow-wrap word-break-all break-words  text-sm py-4 h-[100px] mb-5"> {overview}</p>     */}

                <button className="py-3 px-5 rounded-lg capitalize bg-primary text-base tracking-wide w-full hover:bg-pink-400 transition-all duration-100 mt-auto"> Watch now </button>
            </div>
        </div>

    );
};

export default MovieCard;