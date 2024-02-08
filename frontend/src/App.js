import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Customer } from "./Pages/Customer/Customer";
import { Home } from "./Pages/Home/Home";
import MainNavbar from "./Pages/MainNavbar/MainNavbar";
import {Freelancer} from "./Pages/Freelancer/Freelancer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
              <Route path="/Freelancer" element={<Freelancer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
