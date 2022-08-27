import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'helpers/fetchHandler';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
      setMovie(res);
    });
      // eslint-disable-next-line
  }, []);
  console.log(movie);
  return (
    <>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <b>"{movie.tagline}"</b>
          <br />
          <br />
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
          {movie.genres && (
            <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
          )}
          <p>Overview: {movie.overview}</p>
          <p>Duration: {movie.runtime} min</p>
          <p>Budget: {movie.budget}$</p>
          <p>Average vote: {movie.vote_average}</p>
                  <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
                  <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
                  <Outlet/>
        </div>
      )}
    </>
  );
};
