import React from 'react'
import SingleMovie from './SingleMovie';

function Watchlist({moviesArray, onRemove, type}) {
    console.log(moviesArray);
    console.log("WA");
    return (
        <div class="container">
            <div class="row">
            {moviesArray.map((mov) => (
        <SingleMovie movie={mov} key={mov.id} onAdd = {onRemove} type = {type}/>
      ))}
           
            </div>
        </div>
    );
}

export default Watchlist;
