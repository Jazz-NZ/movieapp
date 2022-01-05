import React from 'react'
import SingleMovie from './SingleMovie';



 function Movies({moviesArray, onAdd, type}) {
     
    return (
        <div class="container">
            <div class="row">
            {moviesArray.map((mov) => (
        <SingleMovie movie={mov} key={mov.id} onAdd = {onAdd} type = {type}/>
      ))}
           
            </div>
        </div>
    );
}
export default Movies;
