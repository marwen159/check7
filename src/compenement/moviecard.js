import React from 'react';
import'../App.css';
import Rate from './rate';
const moviecard = ({movie:{name,image,rate}}) => {
    return (
        <div style={{ border:"2px solid",
        display:"flex", flexDirection:"column"}}>
            <h1>{name}</h1>
            <img width="200px" height="300px"src={image} />
            <Rate rating={rate} />
        </div>
    )
}

export default moviecard;


