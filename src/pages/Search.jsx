import { useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8a2f0b854d8f567856f70dbb752cf8ec&query=${query}&language=fr-FR`)
      .then(res => setResults(res.data.results))
      .catch(() => setResults([]));
  };

  return (
    <>
      <form className="form-container search-container" onSubmit={handleSearch}>
        <div className="form-group">
          <label>Rechercher un film</label>
          <input value={query} onChange={e => setQuery(e.target.value)} type="text" />
        </div>
        <button className="btn" type="submit">Chercher</button>
      </form>
      <div className="movie-grid">
        {results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </>
  );
}
