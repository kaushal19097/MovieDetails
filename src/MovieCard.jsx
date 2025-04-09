import React from "react";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <div className="card-body">
        <h2>{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Type:</strong> {movie.Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
