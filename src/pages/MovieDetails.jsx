import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/backup.png";
import { convertMinutes } from "../utils/utilis";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const key = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setMovie(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchMovie();
  }, [url]);

  useEffect(() => {
    if (movie?.title) {
      document.title = movie.title;
    }
  }, [movie?.title]);

  if (!movie) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : backup;

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3"></h5>
      <div className="row">
        <div className="col-md-4">
          <img
            src={image}
            alt={movie.title}
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>

          {movie.genres?.length > 0 && (
            <p className="d-flex gap-3">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="badge bg-danger">
                  {genre.name}
                </span>
              ))}
            </p>
          )}

          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i> {movie.vote_average} |{" "}
            <i className="bi bi-people-fill text-success"></i> {movie.vote_count} reviews
          </p>

          <table className="table table-bordered w-50 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>${movie.budget.toLocaleString()}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>${movie.revenue.toLocaleString()}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>

          <a
            href={`https://www.imdb.com/title/${movie.imdb_id}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning mt-2"
          >
            View in IMDB
          </a>
        </div>
      </div>
    </main>
  );
};


