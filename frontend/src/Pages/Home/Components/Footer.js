import React from 'react';

export const Footer = (props) => {
  return <ul style={{margin: "5%",  listStyleType: "none"}} className='text-light'>
    <li style={{marginBottom: "0.5%"}}><h5>{props.categoryname}</h5></li>
    <li style={{marginBottom: "0.5%"}}>{props.name1}</li>
    <li style={{marginBottom: "0.5%"}}>{props.name2}</li>
    <li style={{marginBottom: "0.5%"}}>{props.name3}</li>
    <li style={{marginBottom: "0.5%"}}>{props.name4}</li>
    <li style={{marginBottom: "0.5%"}}>{props.name5}</li>
    <li style={{marginBottom: "0.5%"}}>{props.name6}</li>
    <li style={{marginBottom: "0.5%"}}>{props.name7}</li>
    <li style={{marginBottom: "0.5%"}}>{props.name8}</li>
    
    </ul>
}