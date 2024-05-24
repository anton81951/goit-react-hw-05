import { useEffect, useState } from 'react';
import MovieList from "../../components/MovieList/MovieList";
import MoviesForm from '../../components/MoviesForm/MoviesForm';
import { searchMovie } from '../../movies-api';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieFilter = searchParams.get('movie') ?? '';

  const changeMovieFilter = newFilter => {
    setSearchParams({ movie: newFilter });
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    
      searchMovie(movieFilter)
        .then(data => {
          setMovies(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
  }, [movieFilter]);

  return (
    <div>
      <MoviesForm filter={movieFilter} onSearch={changeMovieFilter} />
      {loading && <div>Loading movies...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;