
import './App.css';
import {BrowserRouter, Route,Routes}from "react-router-dom"
import { Customer } from './Pages/Customer/Customer';
import { Home } from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Customer" element={<Customer />} />
</Routes>

      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
