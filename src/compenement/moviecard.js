import React from 'react';
import'../App.css';
import Rate from './rate';
const moviecard = ({movie:{name,image,rate}}) => {
    return (
        <div className="card">
            <h1>{name}</h1>
            <img src={image} />
            <Rate rating={rate} />
        </div>
    )
}

export default moviecard;


