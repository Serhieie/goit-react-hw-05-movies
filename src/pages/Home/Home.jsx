import { useEffect, useState, useMemo } from 'react';
import { API_KEY, BASE_URL, options } from 'constants/constants';
import axios from 'axios';
import HeroSection from './HeroSection';
import TrendingSection from './TrendingSection';
import { errorToast } from 'helpers/toasts';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [firstMovie, setFirstMovie] = useState(null);

  const restOfMovies = useMemo(() => movies.slice(1, 15), [movies]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}trending/all/day?${API_KEY}`,
          options
        );
        setMovies(response.data.results);
        setFirstMovie(response.data.results[0]);
      } catch (error) {
        errorToast();
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HeroSection firstMovie={firstMovie} />
      <TrendingSection restOfMovies={restOfMovies} />
    </>
  );
}
