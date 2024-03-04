import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gigs.css";
import plus from "../gigCard/Components/plus.png";
import GigCard from "../gigCard/Components/GigCard";
import gigsData from "../../Data.json";

const GigsTech = () => {
  const [gigs, setGigs] = useState(null);
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const getGigData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/allGigs");
      setGigs(response.data);
      console.log(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getGigData();
  }, []); // The empty dependency array means this effect runs once after the initial render

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FreeEZ GRAPHICS&DESIGN</span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with FreeEZ AI artists.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Search</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by : </span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src={plus}
              onClick={() => setOpen(!open)}
              alt="Sort"
              id="gigimg"
            />

            {open && (
              <div className="rightMenu">
                <span onClick={() => reSort("createdAt")}>Newest</span>
                <span onClick={() => reSort("sales")}>Best Selling</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
        {
          gigs && gigs.some(gig => gig.category === "Technology") ? (
            gigs.map((gig, index) => (
              gig.category === "Technology" && (
                  <GigCard key={gig.id} index={index} item={gig} />
              )
            ))
          ) : (
               <p>Pas de services disponibles dans cette catégorie</p>
              )
        }
        </div>
      </div>
    </div>
  );
};

export default GigsTech;
