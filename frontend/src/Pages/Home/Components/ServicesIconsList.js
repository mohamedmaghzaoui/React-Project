import React from 'react';

export const ServicesIconsList = (props) => {
    return <a href={props.href} style={{margin: "5%"}}>  <img width={130} src={props.src}/><div className='text-center' style={{marginTop: "3%"}}>{props.name}</div></a>
}