import React from 'react';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import AddMovie from './pages/AddMovie';
import MovieDetails from './pages/MovieDetails';
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/film-app">
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Accueil</Link>
        <Link to="/search">Recherche</Link>
        <Link to="/add">Ajouter un film</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
