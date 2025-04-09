import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard.jsx";
import MovieDetails from "./MovieDetails.jsx";
import Pagination from "./Pagination.jsx";

const API_KEY = "b7c797b";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    if (query) searchMovies();
  }, [page]);

  const searchMovies = async () => {
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=${API_KEY}`);
    const data = await res.json();
    if (data.Response === "True") {
      setMovies(data.Search);
      setTotalResults(parseInt(data.totalResults));
    } else {
      setMovies([]);
      setTotalResults(0);
    }
    setSelectedMovieId(null);
  };

  const handleCardClick = (id) => {
    setSelectedMovieId(id);
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="app">
      <h1 id="title">🎬 Movie Search App</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          onKeyDown={(e) => e.key === "Enter" && searchMovies()}
        />
        <button onClick={() => {
          setPage(1);
          searchMovies();
        }}>Search</button>
      </div>

      {selectedMovieId ? (
        <MovieDetails imdbID={selectedMovieId} onBack={() => setSelectedMovieId(null)} />
      ) : (
        <>
          {totalPages > 1 && (
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
          )}

          <div className="card-container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} onClick={handleCardClick} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
