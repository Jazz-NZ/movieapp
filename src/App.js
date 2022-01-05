import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from './components/Watchlist';




function App() {

    const [watchNum, setWatchNum] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("watchNum");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
      });
    const [toWatch, setToWatch] = useState([]);
    
   

    const [moviesArray1] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("moviesArray1");
        const initialValue = JSON.parse(saved);
       
        return initialValue ||    [
            {
                id : 1,
                title : "Lock, Stock and Two Smoking Barrels",
                desc : "Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.",
                toWatch : false,
                mImage : "https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
            },
            {
                id : 2,
                title : "Django Unchained",
                desc : "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
                toWatch : false,
                mImage : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
            },
            {
                id : 3,
                title : "Fight Club",
                desc : "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
                toWatch : false,
                mImage : "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
            },
            {
                id : 4,
                title : "Pulp Fiction",
                desc : "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                toWatch : false,
                mImage : "https://upload.wikimedia.org/wikipedia/sr/9/97/%D0%9F%D1%83%D0%BB%D0%BF_%D1%84.jpeg",
            },
            {
                id : 5,
                title : "The Green Mile",
                desc : "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
                toWatch : false,
                mImage : "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
            },
            {
                id : 6,
                title : "The Shawshank Redemption",
                desc : "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                toWatch : false,
                mImage : "https://upload.wikimedia.org/wikipedia/sr/c/cb/The_Shawshank_Redemption.jpg",
            }
            ];
      });
     

    useEffect(() => {
        // storing input name
        localStorage.setItem("moviesArray1", JSON.stringify(moviesArray1));
        addToWatch();
      }, [moviesArray1]);
function addToWatchlist(id){
   
   
    changeState(id);
    addToWatch();
    localStorage.setItem("moviesArray1", JSON.stringify(moviesArray1));

};

useEffect(() => {
    // storing input name
    localStorage.setItem("watchNum", JSON.stringify(watchNum));
  }, [watchNum]);

function removeToWatchList(id){
    
    
    changeStateFalse(id);
    addToWatch();
    setWatchNum(watchNum-1);
    localStorage.setItem("moviesArray1", JSON.stringify(moviesArray1));

}

function containtsMovie(id, array){

    let check = false;
    
    array.forEach((element) => {
        console.log(element.id === id);
       
        
        if(element.id === id){
            check = true;
        }
    });
    
    if(check === false){
        
        setWatchNum(watchNum+1);
    }
}

function changeState(id){

    moviesArray1.forEach(element => {
        if(element.id===id){
            containtsMovie(id,toWatch);
            element.toWatch = true;
        }
    });
}
function changeStateFalse(id){

    moviesArray1.forEach(element => {
        if(element.id===id){
            containtsMovie(id,toWatch);
            element.toWatch = false;
        }
    });
}

function addToWatch(){
    let newToWatch = moviesArray1.filter((element)=>element.toWatch===true);
    
    setToWatch(newToWatch);
}





  return (

    
    <BrowserRouter className="App">
        <Navbar toWatch = {watchNum}></Navbar>
         <Routes>
        <Route 
          path="/"
          element={<Movies moviesArray = {moviesArray1} onAdd = {addToWatchlist} type = {1}></Movies> }
        />
        { <Route path="/watchlist" element={<Watchlist moviesArray={toWatch} onRemove = {removeToWatchList} type = {2}></Watchlist>} /> }
      </Routes>
        
        
    </BrowserRouter>
  );
}

export default App;
