import React from 'react';
import {FaStar}  from 'react-icons/fa';
  const rating = ({ratefilter,ratecolor,haver}) => {

   
    return (
        <div>
            {[...Array(5)].map((el,i) =>{
                const ratingvalue = i + 1;
                return(
                    <label>
                    <input
                    type="radio"
                    name="rating"
                    value={ratingvalue}
                    onClick={() => ratefilter(ratingvalue)}
                    style={{opacity:"0"}}/>
                    <FaStar
                    className="star"
                    color={ratingvalue <= ( haver || rating ) ? "#ffc107" : "#e4e5e9"}
                   
                    onMouseEnter={() => ratecolor(ratingvalue)}
                    
                    size={50} />
                    
                    </label>
                );

                 } ) }
                 <p>{rating}</p>
           
        </div>
    )
}
  
export default rating;