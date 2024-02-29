import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Customer } from './Pages/Customer/Customer';
import { Home } from './Pages/Home/Home';
import NewNavbar from './Pages/Navbar/NewNavbar';
import FavoriteButton from './Pages/Favourite/FavoriteButton';
import MainNavbar from './Pages/MainNavbar/MainNavbar';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        {/* Utilisation de la nouvelle navbar */}
        <MainNavbar  />

        <div className="content-container">
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />

            {/* Page du client */}
            <Route path="/Customer" element={<Customer />} />

            {/* Page des favoris */}
            <Route path="/Favorite" element={<FavoriteButton />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
