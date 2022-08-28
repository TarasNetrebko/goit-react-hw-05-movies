import { Routes, Route } from 'react-router-dom';
import { NavigationLink, Nav } from './App.styled';
import { lazy, Suspense } from 'react';
const  Home  = lazy(()=> import("./Home/Home"));
const  Movies  = lazy(()=> import("./Movies/Movies"));
const  Cast  = lazy(()=> import("./Cast/Cast"));
const  Reviews  = lazy(()=> import("./Reviews/Reviews.jsx"));
const  PageNotFound  = lazy(()=> import('./PageNotFound/PageNotFound'));
const  MovieDetails  = lazy(()=> import("./MovieDetails/MovieDetails"));



export const App = () => {
  return (
    <div>
      <Nav>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      </Suspense>
    </div>
  );
};

