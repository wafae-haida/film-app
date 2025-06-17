import React, { useState } from 'react';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setMessage('Titre et description sont obligatoires.');
      return;
    }

    // Ici tu peux faire ce que tu veux avec le nouveau film,
    // par exemple l'envoyer à un backend, ou le stocker localement.

    setMessage(`Film "${title}" ajouté avec succès !`);

    // Réinitialisation des champs
    setTitle('');
    setDescription('');
    setReleaseDate('');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Ajouter un film</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Titre *</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>

        <div>
          <label>Description *</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>

        <div>
          <label>Date de sortie</label>
          <input
            type="date"
            value={releaseDate}
            onChange={e => setReleaseDate(e.target.value)}
            className="w-full border p-2"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
