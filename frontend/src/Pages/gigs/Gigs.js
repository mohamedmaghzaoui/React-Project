import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gigs.css";
import plus from "../gigCard/Components/plus.png";
import GigCard from "../gigCard/Components/GigCard";
import gigsData from "../../Data.json";

const Gigs = () => {
  const [gigs, setGigs] = useState(null);
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [searchedGigs, setSearchedGigs] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
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
        <span className="breadcrumbs">Gig-Genius GRAPHICS&DESIGN</span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with Gig-Genius AI
          artists.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input
              onChange={(e) => setMinValue(e.target.value)}
              type="number"
              placeholder="min"
            />
            <input
              onChange={(e) => setMaxValue(e.target.value)}
              type="number"
              placeholder="max"
            />
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
          {gigs &&
            gigs.map((gig, index) => (
              <GigCard key={gig.id} index={index} item={gig} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
