import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: { api_key: 'VOTRE_API_KEY', language: 'fr-FR' }
    }).then(response => {
      setMovie(response.data);
    });
  }, [id]);

  if (!movie) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Date de sortie : {movie.release_date}</p>
      <p>Note : {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetails;
