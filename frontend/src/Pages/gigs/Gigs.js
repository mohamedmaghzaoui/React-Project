import React from "react";
import { useState } from "react";
import './Gigs.css';
import plus from "../gigCard/Components/plus.png";
import gigs from "../../Data"
import GigCard from "../gigCard/Components/GigCard";


const Gigs = () => {
    const [sort, setSort] = useState('sales')
    const [open, setOpen] = useState(false)

    const reSort=(type)=>{
        setSort(type)
        setOpen(false)
    }

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
                    < div className="right">
                        <span className="sortBy">Sort by : </span>
                        <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
                        <img src={plus} onClick={() => setOpen(!open)} />

                        {open && (
                            <div className="rightMenu">
                                <span onClick={() => reSort('createdAt')}>Newest</span>
                                <span onClick={() => reSort('sales')}>Best Selling</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {
                        gigs.map(gig=>(
                            <GigCard key={gig.id} item={gig} />
                        ))}
                  </div>  
            </div>
        </div>
    );
};
export default Gigs;