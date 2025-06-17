import { useState } from 'react';

export default function AddMovie() {
  const [movie, setMovie] = useState({ title: '', description: '', release_date: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.title || !movie.description) return;
    setSuccess(true);
    setMovie({ title: '', description: '', release_date: '' });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {success && <div className="success">Film ajouté localement !</div>}
      <div className="form-group">
        <label>Titre *</label>
        <input name="title" value={movie.title} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Description *</label>
        <textarea name="description" value={movie.description} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Date de sortie</label>
        <input type="date" name="release_date" value={movie.release_date} onChange={handleChange} />
      </div>
      <button className="btn" type="submit">Ajouter le film</button>
    </form>
  );
}
