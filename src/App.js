import { Fragment } from "react";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import MovieDetailsPage from "./pages/MovieDetailsPage";



function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>} >
          <Route path="/" element={
            <>
              <Banner></Banner>
              <HomePage></HomePage>
            </>
          }></Route>

          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route path="/movie/:movieId" element={<MovieDetailsPage></MovieDetailsPage>}></Route>
        </Route>
      </Routes>

    </Fragment>
  );
}

export default App;
