import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from "./Home/Home"
import { Movies } from "./Movies/Movies"
import { Cast } from "./Cast/Cast"
import {Reviews} from "./Reviews/Reviews.jsx"
import {MovieDetails} from "./MovieDetails/MovieDetails"

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<PageNotFound/>} /> */}
      </Routes>
    </div>
  );
};
