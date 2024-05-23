import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import css from './App.module.css';

const Navigation = lazy(() => import('./Navigation/Navigation.jsx'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage.jsx'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage.jsx'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() => import('../components/MovieReviews/MovieReviews.jsx'));
const MovieForm = lazy(() => import('./MoviesForm/MoviesForm.jsx'));

export const App = () => {
  return (
    <div className={css.generalShape}>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;