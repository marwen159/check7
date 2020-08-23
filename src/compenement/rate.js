import React from 'react'

const rate = ({rating}) => {
    let arr=[];
    for(let i=0;i<5;i++)
    {
        if (rating>i)
arr.push(<span>★</span>);
else
arr.push(<span>☆</span>)
    }
    return (
        
        arr
       
    )
}

export default rate;
