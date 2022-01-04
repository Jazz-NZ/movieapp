import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

    const [watchNum, setWatchNum] = useState(0);
const moviesArray1 = [
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
  },
  {
      id : 4,
      title : "Movie 4",
      desc : "Desc 4",
  },
  {
      id : 5,
      title : "Movie 5",
      desc : "Desc 5",
  },
  {
      id : 6,
      title : "Movie 6",
      desc : "Desc 6",
  }
]

function addToWatchlist(id){
    setWatchNum(watchNum+1);
}






  return (

    
    <BrowserRouter className="App">
        <Navbar toWatch = {watchNum}></Navbar>
         <Routes>
        <Route
          path="/"
          element={<Movies moviesArray = {moviesArray1} onAdd = {addToWatchlist}></Movies> }
        />
        {/* <Route path="/cart" element={<Cart products={cartProducts} />} /> */}
      </Routes>
        
        
    </BrowserRouter>
  );
}

export default App;
