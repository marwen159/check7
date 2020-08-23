import React, { useState } from 'react'
import Modal from 'react-modal';
// import './Add_movie.css'

 const Add =({ AddMovie })=> {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [name, setname] = useState('');
  
  const [rate, setRate] = useState(1);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setname('');
  
    setRate(1);
  }

   const handleAdd = (e) => {
   let newMovie = {
     name: name,
     rate: rate,
   };
   
   AddMovie(e,newMovie);
   setIsOpen(false);

   setname('');
   setRate(1);
 };
return(
  <div className='addMovie'>
    <button className="Add-btn" onClick={openModal}>
        Add
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
      <h1 className='addmovie'>Add a movie</h1>
      <form>
          <label>Movie Name</label>
          <input
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => setname(e.target.value)}
          />
          </form>
          <button className="submit" onClick={handleAdd}>
          Submit
        </button>
        <button className="close" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
);
};

export default Add