import axios from 'axios';

const API_URL_FIRST = 'https://api.themoviedb.org/3/trending/movie/week';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTlhMTM5YmY3NjE3NWY0NzliNzE5NDVlYTI2NGUxMSIsInN1YiI6IjY2NGYwY2UyYTkxYzJiOTcwYWRkNDJhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3N6eg-7DfjS5okSkPh2DiecyNKbUv97Q0hFtB12EQng';

export const fetchTrendingMovies = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  };

  try {
    const response = await axios.get(API_URL_FIRST, options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw new Error("Failed to fetch trending movies. Please try again later.");
  }
};

export const fetchMovieDetails = async (movieId) => {
  
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=299a139bf76175f479b71945ea264e11`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error("Failed to fetch movie details. Please try again later.");
  }
};

export const fetchMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=299a139bf76175f479b71945ea264e11`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw new Error("Failed to fetch movie cast. Please try again later.");
  }
};

export const fetchMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=299a139bf76175f479b71945ea264e11`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw new Error("Failed to fetch movie reviews. Please try again later.");
  }
};

export const searchMovie = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=299a139bf76175f479b71945ea264e11&query=${query}`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error searching for movie:", error);
    throw new Error("Failed to search for movie. Please try again later.");
  }
};



