

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Customer } from "./Pages/Customer/Customer";
import { Home } from "./Pages/Home/Home";
import MainNavbar from "./Pages/MainNavbar/MainNavbar"
function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <MainNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Customer" element={<Customer />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;