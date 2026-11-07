import { useParams } from 'react-router';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import { getMovieRecommendations } from '../api/tmdb-api' 


const MoviePage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isPending, isError  } = useQuery({
    queryKey: ['movie', {id: id}],
    queryFn: getMovie,
  })


  // renaming isPending and iserror so theres no name conflicts with the movie details query variables
  
  const { data: recommendations, isPending: isRecsPending, isError: isRecError } = useQuery({
    queryKey: ['recommendations', { id: id }],
    queryFn: getMovieRecommendations,
  })

  if (isPending || isRecsPending) {
    return <Spinner />;
  }

  if (isError|| isRecError) {
    return <h1>{error.message}</h1>;
  }

  const recommendedMovies = recommendations


  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} recommendations={recommendedMovies} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;