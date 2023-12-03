import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HeroSection({ firstMovie }) {
  return (
    <>
      {firstMovie && (
        <section className="md:flex-col  flex h-[460px] md:h-[600px] md:px-0  px-6 md:pb-2 pb-12 mt-28 md:mt-24 bg-gradient-to-t via-blue-950 from-black to-black lg:flex-col">
          <div
            className="md:w-full md:bg-center  bg-cover bg-no-repeat lg:w-full w-11/12 md:h-[600px] h-[400px] md:rounded-none  rounded-xl overflow-hidden"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${firstMovie.backdrop_path}')`,
            }}
          ></div>
          <div className="md:items-start md:px-[5%] lg:w-6/12 lg:px-2 w-4/12 py-2 px-10 bor rounded-tl-xl bg-transparent relative flex  items-end">
            <div>
              <h1 className=" lg:left-[110%] lg:-top-[40%] lg:text-8xl lg:max-w-[600px] md:text-5xl md:static md:max-w-[320px] md:mb-1 absolute -right-2 -top-2 w-[500px] text-start text-8xl text-white  font-h1Font font-normal leading-20 select-none">
                {firstMovie.title ?? firstMovie.name}
              </h1>
              <div className="flex gap-10">
                <div className="flex items-center gap-1 pb-2">
                  <p className="text-xs">{firstMovie.vote_average}</p>
                  <FaStar className=" fill-amber-400" />
                </div>
                <p className=" text-xs ">
                  Released - {firstMovie.release_date}
                </p>
              </div>
              <p className=" text-sm md:hidden sm2:text-xs lg:text-xs lg:w-[400px]">
                {firstMovie.overview}
              </p>
              <Link
                className="bg-blue-900 transition-all duration-300 hover:bg-blue-700  py-1.5 px-2 block text-center mt-4 w-11/12 mx-auto rounded"
                to={`/movies/${firstMovie.id}`}
              >
                More information
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

HeroSection.propTypes = {
  firstMovie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }),
};
