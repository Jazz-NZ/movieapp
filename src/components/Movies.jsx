import React from 'react'
import SingleMovie from './SingleMovie';



 function Movies({moviesArray, onAdd}) {
     console.log(moviesArray);
    return (
        <div class="container">
            <div class="row">
            {moviesArray.map((mov) => (
        <SingleMovie movie={mov} key={mov.id} onAdd = {onAdd}/>
      ))}
           
            </div>
        </div>
    );
}
export default Movies;
