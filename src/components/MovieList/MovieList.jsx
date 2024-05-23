import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../movies-api';
import { NavLink } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
        setLoading(false);
        console.log(movies);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              <h2>{movie.title}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;