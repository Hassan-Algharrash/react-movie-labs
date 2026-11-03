import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingPage from "./pages/upcomingPage";
import TopRatedPage from "./pages/topRatedMovies"
import PopularPage from "./pages/popularMoviesPage.jsx";
import PlayingPage from "./pages/nowPlayingPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpcomingPage />} /> 
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/movies/top-rated" element={<TopRatedPage />} />
        <Route path="/movies/popular" element={<PopularPage />} />
        <Route path="/movies/playing" element={<PlayingPage />} />

      </Routes>
    </BrowserRouter>

  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
