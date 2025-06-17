import React from 'react';
import { HashRouter  , Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import AddMovie from './pages/AddMovie';
import MovieDetails from './pages/MovieDetails';
import './App.css'

function App() {
  return (
    <HashRouter>
      <div  className="app-container">
        <nav className="text-center">
          <div className="inline-grid grid-cols-3 gap-x-4 ">
              <Link to="/" className=" no-underline ">Accueil</Link>
              <Link to="/search" className=" no-underline">
                Recherche
              </Link>
              <Link to="/add" className=" no-underline">
                Ajouter un film
              </Link>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
