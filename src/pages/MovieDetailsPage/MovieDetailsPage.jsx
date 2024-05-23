import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../movies-api';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getMovieDetails = async () => {
        try {
          const details = await fetchMovieDetails(movieId);
          setMovieDetails(details);
          console.log(details);
          setLoading(false);
        } catch (err) {
          setError(err.message || 'Failed to fetch movie details. Please try again later.');
          setLoading(false);
        }
      };
  
      getMovieDetails();
    }, [movieId]);
  
    if (loading) {
      return <div className="loading-spinner"></div>; // Add a loading spinner here
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        {movieDetails && (
          <>
            <h1>{movieDetails.title}</h1>
            {movieDetails.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            )}
            <p>Release Year: {new Date(movieDetails.release_date).getFullYear()}</p>
            <p>Overview: {movieDetails.overview}</p>
            <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            <span></span>
            <p>Additional information</p>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            {/* Render MovieCast and MovieReviews components conditionally */}
            {movieDetails.cast && <MovieCast cast={movieDetails.cast} />}
            {movieDetails.reviews && <MovieReviews reviews={movieDetails.reviews} />}
          </>
        )}
      </div>
    );
};

export default MovieDetailsPage;