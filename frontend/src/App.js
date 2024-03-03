import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"; // Importez useState pour définir l'état
import { Customer } from "./Pages/Customer/Customer";
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./Pages/MainNavbar/navbar";
import GigsPage from "./Pages/gigCard/GigPage";
import GigForm from "./Pages/gigCard/GigForm";
import Gigs from "./Pages/gigs/Gigs";
import Gig from "./Pages/gig/gig";
import ChatList from "./Pages/Chat/chat";
import { UserProvider } from "./Contexts/userContext";
import { Freelancer } from "./Pages/Freelancer/freelance";
import FavoriteButton from "./Pages/Favourite/FavoriteButton";
import { DescriptionPage } from "./Pages/gig/components/firstPage";
import { ProfilePage } from "./Pages/Profile/profile";
import SecondPage from "./Pages/gig/components/secondPage"; // Importez la deuxième page

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ServicesIconsList } from "./Pages/Home/Components/ServicesIconsList";
import { PrivateRoute } from "./private/privateRoute";

function App() {
  // Définissez la fonction handleBeginClick pour gérer le clic sur le bouton "Begin"
  const handleBeginClick = () => {
    // Vous pouvez ajouter ici le code pour gérer le clic du bouton "Begin"
  };

  return (
    <div className="">
      <UserProvider>
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
                <Route path="/Message" element={<messages />} />

                <Route
                  path="/Customer"
                  element={
                    //custom private route that get element and role as parameter
                    <Customer />
                  }
                />
                <Route path="/favori" element={<FavoriteButton />} />
                <Route path="/chatList" element={<ChatList />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route
                  path="/freelancer"
                  element={
                    <PrivateRoute
                      element={<Freelancer />}
                      allowRoles={["ROLE_CLIENT"]}
                    />
                  }
                />

                {/* Ajoutez une route pour la deuxième page */}
                <Route path="/SecondPage" element={<SecondPage />} />
                <Route
                  path="/DescriptionPage"
                  element={
                    <DescriptionPage setCurrentForm={handleBeginClick} />
                  }
                />
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
