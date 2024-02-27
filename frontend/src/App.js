import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Customer } from "./Pages/Customer/Customer";
import { Home } from "./Pages/Home/Home";
import MainNavbar from "./Pages/MainNavbar/MainNavbar";
import { UserProvider } from "./Contexts/userContext";
import { Freelancer } from "./Pages/Freelancer/freelance";
import FavoriteButton from "./Pages/Favourite/FavoriteButton";
import NewNavbar from "./Pages/Navbar/NewNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ServicesIconsList } from "./Pages/Home/Components/ServicesIconsList";
import { PrivateRoute } from "./private/privateRoute";


function App() {
  return (
    <div className="">
      <UserProvider>
        {" "}
        {/* user context*/}
        <BrowserRouter>
          <div className="">
            <NewNavbar className="" />
            <div className=" ">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route
                  path="/Customer"
                  element={
                    //custom private route that get element and role as parameter
                    <Customer />
                  }
                />
                <Route path="/freelancer" element={<Freelancer />} />
                <Route path="/favori" element={<FavoriteButton />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;