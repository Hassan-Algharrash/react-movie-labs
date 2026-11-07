import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPopularMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";


const PopularPage = (props) => {
  const { data, error, isPending, isError } = useQuery({
        queryKey: ["popular"],
        queryFn: getPopularMovies,
      });
    
      if (isPending) {
        return <Spinner />;
      }
    
      if (isError) {
        return <h1>{error.message}</h1>;
      }
    
  
      const movies = data;
    
      // Redundant, but necessary to avoid app crashing.
      const favorites = movies.filter((m) => m.favorite);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      const addToFavorites = (movieId) => true;
  return (
    <PageTemplate
      title='Popular Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
};
export default PopularPage;