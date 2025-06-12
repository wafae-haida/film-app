import React, { useState } from 'react';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    // Ici on pourrait stocker localement ou envoyer vers un backend
    alert(`Film ajouté : ${title} (${year})`);
    setTitle('');
    setYear('');
  };

  return (
    <form onSubmit={handleAdd}>
      <h1>Ajouter un film</h1>
      <input 
        type="text" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Titre du film" 
        required 
      />
      <input 
        type="number" 
        value={year} 
        onChange={e => setYear(e.target.value)} 
        placeholder="Année de sortie" 
        required 
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddMovie;
