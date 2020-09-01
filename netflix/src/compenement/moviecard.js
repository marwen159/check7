import React from 'react'
import Rate from './rate';
const moviecard = ({movies:{title,image,rate}}) => {
    return (
        <div>
           <h1>{title}</h1> 
           <Rate rating={rate} />
           <img src={image} />

        </div>
    )
}

export default moviecard
