import React from 'react'
import SingleMovie from './SingleMovie';

const moviesArray = [
    {
        id : 1,
        title : "Movie 1",
        desc : "Desc 1",
    },
    {
        id : 2,
        title : "Movie 2",
        desc : "Desc 2",
    },
    {
        id : 3,
        title : "Movie 3",
        desc : "Desc 3",
    }
]

 function Movies() {
    return (
        <div class="container">
            <div class="row">
            
           
                <SingleMovie movie = {moviesArray[0]}/>
                <SingleMovie movie = {moviesArray[1]}/>
                <SingleMovie movie = {moviesArray[2]}/>

                <SingleMovie movie = {moviesArray[0]}/>
                <SingleMovie movie = {moviesArray[1]}/>
                <SingleMovie movie = {moviesArray[2]}/>
            </div>
        </div>
    );
}
export default Movies;
