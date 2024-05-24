import { NavLink } from 'react-router-dom';
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div>
      <ul className={css.moviesList}>
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