import React from 'react';
import { Link } from "react-router-dom";
export const ServicesIconsList = (props) => {
    return <a  style={{margin: "5%"}}>  <img width={130} src={props.src}/><div className='text-center' style={{marginTop: "3%"}}><Link to={`/gigs/${props.name}`}>{props.name}</Link></div></a>
}