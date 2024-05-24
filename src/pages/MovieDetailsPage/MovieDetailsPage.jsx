import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../movies-api';
import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();
    const backLinkRef = useRef(location.state ?? '/');
  
    useEffect(() => {
      setLoading(true);
      const getMovieDetails = async () => {
        try {
          const details = await fetchMovieDetails(movieId);
          setMovieDetails(details);
          console.log(details);
        } catch (err) {
          setError(err.message || 'Failed to fetch movie details. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
      getMovieDetails();
    }, [movieId]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'

    return (
      <div>
        {movieDetails && (
          <>
            <p>
              <b>
                <Link to={backLinkRef.current}>Go back</Link>
              </b>
            </p>
            <h1>{movieDetails.title}</h1>
            {movieDetails.poster_path && (
              <img
                className={css.imageFrame}
                src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`: defaultImg}
                alt={movieDetails.title}
              />
            )}
            <p><b>Release Year:</b> {new Date(movieDetails.release_date).getFullYear()}</p>
            <p><b>Overview: </b>{movieDetails.overview}</p>
            <p><b>Genres: </b>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            <span></span>
            <p><b>Additional information</b></p>
            <ul className={css.list}>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
          </>
        )}
      </div>
    );
};

export default MovieDetailsPage;