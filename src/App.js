import React, { useState } from 'react'
import date from './data';
import Add from './compenement/add'
import Movielist from'./compenement/movielist';
import Search from'./compenement/search';
import Rating from './compenement/rating';
export default function App() {
    const[Name,setName]=useState("");
    // const [movies, setMovies] = useState("")
    const[Data,setData]=useState(date);
    const[rating,setrating]=useState(null);
    const [hover, sethover] =useState(null)


    const AddMovie = (e,newMovie) => {
        e.preventDefault();
        setData([...Data,newMovie]);
      };
 
      const [modalIsOpen, setIsOpen] = useState(false);

      const [name, setname] = useState('');
      
      const [rate, setRate] = useState(1);
    return (
        <div>
            <Add AddMovie={AddMovie}  />
            <Search 

             namefilter={setName}/>

             <Rating  ratefilter={setrating} ratecolor={sethover} haver={hover}/>
           <Movielist dt={Data} keyname={Name} keyrate={rating}/> 
        </div>
    )
}
