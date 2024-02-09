
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Customer } from './Pages/Customer/Customer';
import { Home } from './Pages/Home/Home';
import NewNavbar from './Pages/Navbar/NewNavbar';



function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        {/* Utilisation de la nouvelle navbar */}
        <NewNavbar />

        <div className="content-container">
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />

            {/* Page du client */}
            <Route path="/Customer" element={<Customer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
