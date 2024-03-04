import React from 'react';
import { Link } from "react-router-dom";

export const Footer = (props) => {
  return <ul style={{margin: "5%",  listStyleType: "none"}} className='text-light'>
    <li style={{marginBottom: "1%"}}><h5>{props.categoryname}</h5></li>
    <li style={{marginBottom: "1%"}}><Link className='text-light' to={`/gigs/${props.name1}`}>{props.name1}</Link></li>
    <li style={{marginBottom: "1%"}}><Link className='text-light' to={`/gigs/${props.name2}`}>{props.name2}</Link></li>
    <li style={{marginBottom: "1%"}}><Link className='text-light' to={`/gigs/${props.name3}`}>{props.name3}</Link></li>
    <li style={{marginBottom: "1%"}}><Link className='text-light' to={`/gigs/${props.name4}`}>{props.name4}</Link></li>
    <li style={{marginBottom: "1%"}}><Link className='text-light' to={`/gigs/${props.name5}`}>{props.name5}</Link></li>
    <li style={{marginBottom: "1%"}}><Link className='text-light' to={`/gigs/${props.name6}`}>{props.name6}</Link></li>
    <li style={{marginBottom: "1%"}}><Link className='text-light' to={`/gigs/${props.name7}`}>{props.name7}</Link></li>
    <li style={{marginBottom: "1%"}}><Link className='text-light' to={`/gigs/${props.name8}`}>{props.name8}</Link></li>
    
    </ul>
}