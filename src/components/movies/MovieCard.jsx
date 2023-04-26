import React from 'react';

const MovieCard = () => {
    return (
        <div className="movies-card rounded-lg p-3 bg-slate-800 hover:bg-gray-700 duration-150" >
            <img className="w-full h-[250px] rounded-lg object-cover mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJyKMI8WEmGSgTKgbTTdTovkPkiF-5P9Pkhg&usqp=CAU" alt="" />

            <h3 className=" font-bold text-lg mb-3"> Antman : Quantumania  </h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                <span className="year-released">1/2023</span>
                <span className="ml-auto mr-1"> 6.3  </span>
                <span className="items-center"> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="yellow"
                    class="mr-1 h-4 w-4 text-warning">
                    <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg> </span>
            </div>

            <button className="py-3 px-5 rounded-lg capitalize bg-primary text-base tracking-wide w-full hover:bg-pink-400 transition-all duration-100"> Watch now </button>
        </div>

    );
};

export default MovieCard;