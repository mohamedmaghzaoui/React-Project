import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Customer } from "./Pages/Customer/Customer";
import { Home } from "./Pages/Home/Home";
import MainNavbar from "./Pages/MainNavbar/MainNavbar";
import { UserProvider } from "./Contexts/userContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ServicesIconsList } from "./Pages/Home/Components/ServicesIconsList";

function App() {
  return (
    <div className="">
      <UserProvider>
        <BrowserRouter>
          <div className="">
            <MainNavbar className="" />
            <div className=" ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Customer" element={<Customer />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
