import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8a2f0b854d8f567856f70dbb752cf8ec&language=fr-FR`)
      .then(res => setMovie(res.data));
  }, [id]);

  if (!movie) return <div className="loading">Chargement...</div>;

  return (
    <div className="movie-details">
      <div className="movie-hero">
        <img 
          className="movie-hero-poster" 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
        />
        <div className="movie-hero-info">
          <h2 className="movie-hero-title">{movie.title}</h2>
          <p className="movie-hero-overview">{movie.overview}</p>
          <div className="movie-meta">
            <span className="meta-date">📅 {movie.release_date}</span>
            <span className="meta-rating">⭐ {movie.vote_average}/10</span>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}