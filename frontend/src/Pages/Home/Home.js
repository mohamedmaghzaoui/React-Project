// Home.js
import React from 'react';
import Header from '../../Components/Header';
import Welcome from '../../Components/Welcome';
import Footer from '../../Components/Footer';

const Home = () => {
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

export default Home;
