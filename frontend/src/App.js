import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Customer } from "./Pages/Customer/Customer";
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./Pages/MainNavbar/navbar";
import GigsPage from "./Pages/gigCard/GigPage";
import GigForm from "./Pages/gigCard/GigForm";
import Gigs from "./Pages/gigs/Gigs";
import Gig from "./Pages/gig/gig";
import { UserProvider } from "./Contexts/userContext";
import { Freelancer } from "./Pages/Freelancer/freelance";
import FavoriteButton from "./Pages/Favourite/FavoriteButton";

import { message } from "./Pages/Messages/message";
import { ProfilePage } from "./Pages/Profile/profile";

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
            <Navbar className="" />
            <div className=" ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Customer" element={<Customer />} />
                <Route path="/GigsPage" element={<GigsPage gigs={[]} />} />
                <Route path="/GigForm" element={<GigForm />} />
                <Route path="/Gigs" element={<Gigs gigs={[]} />} />
                <Route path="/Gig" element={<Gig Gig={[]} />} />
                <Route path="/chatList" element={<messages />} />
                <Route
                  path="/Customer"
                  element={
                    //custom private route that get element and role as parameter
                    <Customer />
                  }
                />
                <Route path="/freelancer" element={<Freelancer />} />
                <Route path="/favori" element={<FavoriteButton />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
