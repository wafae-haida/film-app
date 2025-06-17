import React, { useState } from "react";
import axios from "axios";

const API_KEY = "TA_CLE_API"; // Remplace par ta clé TMDb ou autre API

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${'3669e21709e6fe6ad7f4bc059ab8f881'}&query=${encodeURIComponent(query)}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error("Erreur API:", error);
    }
  };

  return (
    <div className="p-4">
      <br />
      <form onSubmit={handleSubmit} className="mb-4 text-center">
        <input
          type="text"
          placeholder="Chercher un film"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-80"
        />
        <button type="submit" className="ml-2 bg-blue-600 text-white px-4 py-2 rounded">
          Rechercher
        </button>
      </form>
      <br />
      <div>
        {results.length === 0 && <p>Aucun résultat</p>}
        <ul>
          {results.map((movie) => (
            <li key={movie.id} className="mb-2">
              {movie.title} ({movie.release_date?.slice(0, 4)})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
