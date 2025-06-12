import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);  // Stocke la liste des films
  const [loading, setLoading] = useState(true);  // Gestion du chargement
  const [error, setError] = useState(null);  // Gestion des erreurs

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '3669e21709e6fe6ad7f4bc059ab8f881',  // Remplace par ta clé API TMDb
              language: 'fr-FR',
              page: 1,
            },
          }
        );

        setMovies(response.data.results);  // Met à jour la liste des films
      } catch (err) {
        setError('Erreur lors du chargement des films');
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  if (loading) return <p>Chargement des films...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card" style={{ marginBottom: '20px' }}>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <p>Note : {movie.vote_average} / 10</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
