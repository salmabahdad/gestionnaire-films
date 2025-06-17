import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8a2f0b854d8f567856f70dbb752cf8ec&language=fr-FR`)
      .then(res => setMovies(res.data.results))
      .catch(() => setMovies([]));
  }, []);

  return (
    <div className="movie-grid">
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}
