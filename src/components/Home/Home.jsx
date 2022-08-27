import { getTrending } from 'helpers/fetchHandler';
import { useState, useEffect } from 'react';
import { List, ListItem } from './Home.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending().then(setMovies);
  }, []);
  return (
    <div>
      <List>
        {movies &&
          movies.map(({ id, poster_path, title }) => {
            return (
              <Link to={`/movies/${id}`}>
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
            );
          })}
      </List>
    </div>
  );
};
