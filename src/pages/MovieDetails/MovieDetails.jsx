import { useRef, useEffect, useState } from 'react';
import { API_KEY, BASE_URL, options } from 'constants/constants';
import axios from 'axios';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { IoPlaySkipBackSharp } from 'react-icons/io5';
import RotatingLines from 'helpers/Loader';
import { errorToast } from 'helpers/toasts';
import MovieDetailsField from './MovieDetailsField';
import MovieDetailsList from './MovieDetailsList';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}movie/${movieId}?${API_KEY}`,
          options
        );
        setMovie(response.data);
      } catch (error) {
        errorToast();
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className="md:mt-20 mt-28">
      <Link
        className="bg-blue-900 hover:bg-blue-700 fixed z-100 right-0 top-[86px] 
         py-0.5 px-3  md:py-1 md:px-2   md:mr-[20px] mr-[90px] 
         rounded-full flex items-center gap-1 text-xs"
        to={backLinkLocation.current}
      >
        <IoPlaySkipBackSharp size={18} />
        back
      </Link>
      <MovieDetailsField movie={movie} />
      <MovieDetailsList />
      <Suspense fallback={<RotatingLines />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
