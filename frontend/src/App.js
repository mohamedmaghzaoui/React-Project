import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Importez useState pour définir l'état
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
import { GigTotal } from "./Pages/GigTotal/GigTotal";
import GigsTech from "./Pages/gigs/GigsTech";
import GigsGraph from "./Pages/gigs/GigsGraph";
import GigsAnim from "./Pages/gigs/GigsAnim";
import GigsDesign from "./Pages/gigs/GigsDesign";
import GigsMarketing from "./Pages/gigs/GigsMarketing";
import GigsBusiness from "./Pages/gigs/GigsBusiness";
import GigsLifestyle from "./Pages/gigs/GigsLifestyle";
import GigsPhotography from "./Pages/gigs/GigsPhotography";
import GigsProg from "./Pages/gigs/GigsProg";
import GigsTranslation from "./Pages/gigs/GigsTranslation";
import GigsVideo from "./Pages/gigs/GigsVideo";

function App() {
  // Définissez la fonction handleBeginClick pour gérer le clic sur le bouton "Begin"
  const handleBeginClick = () => {
    // Vous pouvez ajouter ici le code pour gérer le clic du bouton "Begin"
  };

  const [gigs, setGigs] = useState([]);
  useEffect(() => {
      const fetchGigs = async () => {
          try {
              axios.get("http://127.0.0.1:8000/allGigs")
              .then(res => {
                  
                  setGigs(res.data);
              })
  
  
          } catch (error) {
              console.error("Error fetching gigs:", error);
          }
      };
  
      fetchGigs();
  }, []);
  return (
    <div className="">
      <UserProvider>
        {/* user context*/}
        <BrowserRouter>
          <div className="">
            <Navbar className="" />
            <div className=" ">
              <Routes>
              {gigs.map((gig) => (
                    <Route key={gig.id} path={`/${gig.id}`} element={<GigTotal gig={gig} />} />
                ))}
                <Route path="/" element={<Home />} />
                <Route path="/Customer" element={<Customer />} />
                <Route path="/GigsPage" element={<GigsPage gigs={[]} />} />
                <Route path="/GigForm" element={<GigForm />} />
                <Route path="/Gigs" element={<Gigs gigs={[]} />} />
                <Route path="/Gigs/technology" element={<GigsTech gigs={[]} />} />
                <Route path="/Gigs/graphics" element={<GigsGraph gigs={[]} />} />
                <Route path="/Gigs/animation" element={<GigsAnim gigs={[]} />} />
                <Route path="/Gigs/design" element={<GigsDesign gigs={[]} />} />
                <Route path="/Gigs/marketing" element={<GigsMarketing gigs={[]} />} />
                <Route path="/Gigs/business" element={<GigsBusiness gigs={[]} />} />
                <Route path="/Gigs/lifestyle" element={<GigsLifestyle gigs={[]} />} />
                <Route path="/Gigs/photography" element={<GigsPhotography gigs={[]} />} />
                <Route path="/Gigs/programming" element={<GigsProg gigs={[]} />} />
                <Route path="/Gigs/translation" element={<GigsTranslation gigs={[]} />} />
                <Route path="/Gigs/video" element={<GigsVideo gigs={[]} />} />
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
                <Route path="/addgig2" element={<SecondPage />} />
                <Route
                  path="/addgig"
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
