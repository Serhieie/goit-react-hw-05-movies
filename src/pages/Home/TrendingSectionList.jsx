import { Link } from 'react-router-dom';

export default function CastList({ restOfMovies }) {
  return (
    <ul className="grid sm2:grid-cols-4 md:grid-cols-2 grid-cols-7 w-11/12 mx-auto gap-3">
      {restOfMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img
              loading="lazy"
              className=" rounded-sm overflow-hidden"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title ?? movie.name}
            />
            <h3>{movie.title ?? movie.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
