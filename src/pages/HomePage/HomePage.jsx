import { useEffect, useState } from 'react';
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from '../../movies-api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchTrendingMovies()
      .then(data => {
        setTrendingMovies(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <div>Loading trending movies...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default HomePage;