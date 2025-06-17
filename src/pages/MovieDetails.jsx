import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const movie = location.state?.movie;

  // Si pas de state, tu peux appeler une API ici pour récupérer les détails par id.

  if (!movie) {
    return (
      <div>
        <p>Film non trouvé.</p>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div >
      <div className="text-center">
        <h1>{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h4>Note moyenne :⭐ {movie.vote_average} / 10</h4>
        <h4>Date de sortie : {movie.release_date}</h4>
      </div>
      <p>{movie.overview || "Pas de description disponible."}</p>
      <br />
    </div>
  );
}
