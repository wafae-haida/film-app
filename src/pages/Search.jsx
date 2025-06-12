import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: 'VOTRE_API_KEY',
        query,
        language: 'fr-FR',
      },
    }).then(response => {
      setResults(response.data.results);
    });
  };

  return (
    <div>
      <h1>Recherche de films</h1>
      <input 
        type="text" 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Titre du film" 
      />
      <button onClick={handleSearch}>Chercher</button>

      <ul>
        {results.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
