// Home.js
import React from "react";
import Header from "../../Components/Header";
import Welcome from "../../Components/Welcome";

export const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
      </main>
      <Footer />
    </div>
  );
};
