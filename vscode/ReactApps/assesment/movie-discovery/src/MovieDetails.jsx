import React, { useEffect, useState } from "react";

const API_KEY = "b7c797b";

const MovieDetails = ({ imdbID, onBack }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${API_KEY}`);
      const data = await res.json();
      setMovie(data);
    };

    fetchDetails();
  }, [imdbID]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="details">
      <button onClick={onBack}>⬅ Back</button>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
