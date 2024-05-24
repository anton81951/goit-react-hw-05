import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../movies-api';
import css from "./MovieCast.module.css"

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastData = async () => {
      setLoading(true);
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData.cast);
      } catch (error) {
        setError('Failed to fetch cast data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCastData();
  }, [movieId]);

  if (loading) {
    return <div>Loading cast...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div>
      <h2>Cast</h2>
      <ul className={css.list}>
        {cast.map(actor => (
          <li key={actor.id}>
          <img
                className={css.imageFrame}
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : defaultImg}
                alt={actor.name}
              />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;