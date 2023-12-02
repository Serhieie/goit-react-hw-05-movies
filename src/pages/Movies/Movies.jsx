import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router-dom';
import { API_KEY, BASE_URL, options } from 'constants/constants';
import { errorToast } from 'helpers/toasts';
import { debounce } from 'lodash';
import MovieList from './MoviesList';
import MovieText from './MoviesText';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // const backLinkLocation = useRef(location.state?.from ?? '/');
  const movieId = searchParams.get('movieId') || '';

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}search/movie?query=${movieId}&${API_KEY}`,
          options
        );
        setMovies(response.data.results);
      } catch (error) {
        errorToast();
      }
    };
    const delayedQuery = debounce(fetchData, 300);
    delayedQuery();
    return () => delayedQuery.cancel();
  }, [movieId]);

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovies = useMemo(() => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(movieId.toLowerCase())
    );
  }, [movies, movieId]);

  return (
    <section className="mx-auto mt-28 flex justify-center items-center flex-col bg-gradient-to-t via-blue-950 from-black to-black">
      <h2 className="font-h1Font text-4xl mb-2 text-blue-100 md:text-2xl">
        Find your Movie
      </h2>
      <input
        className="bg-blue-200 px-6 py-2 text-blue-900 md:mb-6 mb-16 w-full max-w-[400px] placeholder:text-blue-900
        placeholder:opacity-60 placeholder:font-thin outline-none rounded-sm text-xl md:max-w-[260px]"
        type="text"
        placeholder="Enter movie title"
        value={movieId}
        onChange={updateQueryString}
      />
      <MovieText movieId={movieId} />
      <MovieList visibleMovies={visibleMovies} location={location} />
    </section>
  );
}
