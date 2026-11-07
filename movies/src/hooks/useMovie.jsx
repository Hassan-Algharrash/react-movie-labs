import { useEffect, useState } from "react";
import {getMovies} from '../api/tmdb-api'

const useMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovies(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useMovie;
