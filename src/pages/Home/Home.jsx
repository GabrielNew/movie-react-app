import "./styles.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "test film", release_date: "2020" },
    { id: 2, title: "test 2 film", release_date: "2022" },
    { id: 3, title: "test 3 film", release_date: "2025" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form action="submit" onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
