import React from 'react'

import Rate from "./rate"
const search = ({namefilter}) => {

    return (
        <div>
            <input 
            placeholder="search for your film"
            onChange={(e)=>{namefilter(e.target.value)}}/>

               
        </div>
    )
}

export default search;
