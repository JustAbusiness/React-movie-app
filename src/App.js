import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import MovieList from "./components/movies/MovieList";
import "swiper/scss";


function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary"> Home </span>
        <span> Movies</span>
        <span> About </span>
      </header>

      <section className="banner h-[400px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
            alt=""
            className="rounded-lg w-full h-full object-cover" />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5"> Avengers: Endgame</h2>
            <div className="flex items-center gap-x-4 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Superhero
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary hover:bg-pink-400 text-white font-medium"> Watch Now</button>
          </div>
        </div>
      </section>

      {/* NOW PLAYING  */}
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-10 font-semibold text-2xl"> Now Playing</h2>
        <MovieList></MovieList>
      </section>

      {/* TOP RATED */}
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-10 font-semibold text-2xl"> Top Rated</h2>

        <div className="movies-list grid grid-cols-4 gap-10 text-white cursor-pointer">
          <div className="movies-cart rounded-lg p-3 bg-slate-800 hover:bg-gray-700 duration-100" >
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

            <button className="py-3 px-5 rounded-lg capitalize bg-primary text-base tracking-wide w-full hover:bg-pink-400 transition-all"> Watch now </button>
          </div>
          <div className="movies-cart rounded-lg p-3 bg-slate-800">
            <img className="w-full h-[250px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxWUuC58w51rardQWgnwyfgTJd-m36y3EQA&usqp=CAU" alt="" />

            <p className="text-white"> Movie 2</p>
          </div>

        </div>
      </section>

      {/* TRENDING */}
      <section className="movies-layout page-container-fluid pb-20">
        <div className="flex items-center">
          <h2 className="capitalize text-white mb-10 font-semibold text-2xl"> Trending </h2>
          <span className="mb-9 ml-3" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff0000" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          </span>
        </div>

        <div className="movies-list grid grid-cols-4 gap-10 text-white cursor-pointer">
          <div className="movies-cart rounded-lg p-3 bg-slate-800 hover:bg-gray-700 duration-150" >
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
          <div className="movies-cart rounded-lg p-3 bg-slate-800">
            <img className="w-full h-[250px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxWUuC58w51rardQWgnwyfgTJd-m36y3EQA&usqp=CAU" alt="" />

            <p className="text-white"> Movie 2</p>
          </div>

        </div>
      </section>

    </Fragment>
  );
}

export default App;
