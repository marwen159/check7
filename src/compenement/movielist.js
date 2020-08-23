import React from 'react'
import Moviecart from './moviecard'

const movielist = ({dt,keyname,keyrate}) => {
    
    return (
       
        <div style={{display:'flex',flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}}>
            {dt.filter((obj) => 
            obj.rate >=keyrate &&
            obj.name.toLowerCase().includes(keyname.toLowerCase().trim()))
            .map((el,i)=>

             <Moviecart key={i} movie={el}/>
            )};
        </div>
    )
}

export default movielist;
