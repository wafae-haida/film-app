import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import du Link

function Home() {
  const [movies, setMovies] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '3669e21709e6fe6ad7f4bc059ab8f881',  
              language: 'fr-FR',
              page: 1,
            },
          }
        );

        setMovies(response.data.results);
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
    <div>
      <h1 className="text-center">🎬 Films Populaires</h1>
      <br />
      <div className="grid grid-cols-3 gap-4 ">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            state={{ movie }}  // Passage des données en state optionnel
            className="no-underline"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full"
            />
            <div>
              <h2>{movie.title}</h2>
              <p className="line-clamp-3">
                {movie.overview || "Pas de description disponible."}
              </p>
              <div>⭐ {movie.vote_average} / 10</div>
              <br/>
              <br/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
