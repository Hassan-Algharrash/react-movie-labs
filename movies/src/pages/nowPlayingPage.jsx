import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPlayingMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";


const PlayingPage = (props) => {
  const [movies, setMovies] = useState([]);
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

   useEffect(() => {
    getPlayingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);


  return (
    <PageTemplate
      title='Movies Playing Now'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
};
export default PlayingPage;