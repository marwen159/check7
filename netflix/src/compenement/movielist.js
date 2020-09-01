import React from 'react'
import Moviecard from './moviecard';
const movielist = ({dt,keytitle}) => {
   
    return (
        
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}}>
            {dt.filter((obj)=>
            obj.title.toLowerCase().includes(keytitle.toLowerCase().trim()))
            .map((el,i)=>
             
             
              <Moviecard key={i} movies={el}  /> 
             
            )}
        </div>
    )
}

export default movielist
