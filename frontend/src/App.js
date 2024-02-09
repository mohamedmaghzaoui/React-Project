import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Customer } from "./Pages/Customer/Customer";
import { Home } from "./Pages/Home/Home";
import MainNavbar from "./Pages/MainNavbar/MainNavbar"
import GigsPage from "./Pages/gigCard/GigPage";
import GigForm from "./Pages/gigCard/GigForm";
import Gigs from "./Pages/gigs/Gigs";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ServicesIconsList } from "./Pages/Home/Components/ServicesIconsList";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="">
          <MainNavbar className="" />
          <div className=" ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Customer" element={<Customer />} />
              <Route path="/GigsPage" element={<GigsPage gigs={[]} />} />
              <Route path="/GigForm" element={<GigForm />} />
              <Route path="/Gigs" element={<Gigs />} />
        
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
