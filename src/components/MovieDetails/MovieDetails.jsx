import { useEffect, useState } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'helpers/fetchHandler';
import { NavigationLink } from 'components/App.styled';
import { StyledButton } from 'components/Movies/Movies.styled';
import moment from 'moment-js';
import {DetailsContainer, DescriptionContainer, Span, Tag, AdditionalInformation} from "./MoviesDetails.styled"

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
      setMovie(res);
    });
    // eslint-disable-next-line
  }, []);
  const goBack = () => navigate(location.state?.from || "/movies");
  return (
    <>
      {movie && (
        <div>
          <StyledButton type="button" onClick={goBack}>Go Back</StyledButton>
          <DetailsContainer>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                height="400"
                width="300"
              />
            <DescriptionContainer>
              <h1>{movie.title}({moment(movie.release_date, "YYYY/MM/DD").format("YYYY")})</h1>
              <Tag>"{movie.tagline}"</Tag>
              {movie.genres && (
                <p>
                  <Span>Genres: </Span>{movie.genres.map(genre => genre.name).join(', ')}
                </p>
              )}
              <p><Span>Overview: </Span>{movie.overview}</p>
              <p><Span>Duration: </Span>{movie.runtime} min</p>
              <p><Span>Budget: </Span>{movie.budget > 0 ? `${movie.budget}$` : "unknown"}</p>
              <p><Span>Average vote: </Span>{movie.vote_average}</p>
            </DescriptionContainer>
          </DetailsContainer>

          <AdditionalInformation>
            <h2>Additional information:</h2>
            <NavigationLink state={{from: location.state?.from || "/movies"}} to={`/movies/${movie.id}/cast`}>Cast</NavigationLink>
            <NavigationLink state={{from: location.state?.from || "/movies"}} to={`/movies/${movie.id}/reviews`}>Reviews</NavigationLink>
          </AdditionalInformation>
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;