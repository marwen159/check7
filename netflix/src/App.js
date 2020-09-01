import React,{useState} from 'react';
import './App.css';
import Search from './compenement/search';
import Movielist from './compenement/movielist';
import data from './compenement/data';
function App() {
 const [Data,setData]=useState(data);
 const [title,settitle]=useState("");
  return (
    <div className="App">
      <Search messi={settitle} />
      <Movielist dt={Data} keytitle={title} />
    </div>
  );
}

export default App;
