import { searchMoviesByWord } from 'helpers/fetchHandler';
import { useState, useEffect } from 'react';
import { List, ListItem } from '../Home/Home.styled';
import { Link, useSearchParams, useLocation} from 'react-router-dom';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  Container,
} from './Movies.styled';
const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const location = useLocation();
  useEffect(() => {
    if (page > 1) {
      searchMoviesByWord(query.toLowerCase(), page).then(
        res => {
          setMovies([...movies, ...res]);
        }
      );
    }
    // eslint-disable-next-line
  }, [page]);
  useEffect(() => {
    if (query) {
      setPage(1);
      setKeyword(query);
      searchMoviesByWord(query.toLowerCase(), page).then(res => {
        setMovies(res);
      });
    } else {
      setMovies([]);
      setKeyword("");
    }
    // eslint-disable-next-line
  }, [query]);
  const keywordChanger = e => {
    setKeyword(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    if (keyword) {
      setSearchParams({ query: keyword });
    }
  };
  const pageChanger = () => {
    setPage(prevPage => {
      setPage(prevPage + 1);
    });
  };
  return (
    <>
      <StyledForm action="" onSubmit={submitHandler}>
        <StyledInput
          type="text"
          onChange={keywordChanger}
          value={keyword}
          required
        />
        <StyledButton type="submit">Find Movie</StyledButton>
      </StyledForm>
      <List>
        {movies &&
          movies.map(({ id, poster_path, title }) => (
            <Link state={{from: location}} to={`/movies/${id}`}>
              <ListItem key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt="title"
                  width="300"
                  height="450"
                />
                <p>{title}</p>
              </ListItem>
            </Link>
          ))}
      </List>
      <Container>
        {movies.length > 0 && (
          <StyledButton type="button" onClick={pageChanger}>
            Load More
          </StyledButton>
        )}
      </Container>
    </>
  );
};

export default Movies;