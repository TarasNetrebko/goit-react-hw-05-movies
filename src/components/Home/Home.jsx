import { getTrending } from 'helpers/fetchHandler';
import { useState, useEffect } from 'react';
import { List, ListItem,Title } from './Home.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending().then(setMovies);
  }, []);
  return (
    <div>
      <Title>Trending Movies of the week</Title>
      <List>
        {movies &&
          movies.map(({ id, poster_path, title }) => {
            return (
              <Link state={{ from: "/" }} to={`/movies/${id}`} key={id}>
                <ListItem>
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

export default Home;
