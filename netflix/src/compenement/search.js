import React from 'react'

const search = ({messi}) => {
    return (
        <div>
            <input 
            placeholder="search for a movie"
            onChange={(e)=>messi(e.target.value)}
            />
        </div>
    )
}

export default search

