import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Navbar({toWatch}) {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                <li className='navbar-brand'>
                    <a className='nav-link' >Home <span class='sr-only'>(current)</span></a>
                </li>
                <li className='navbar-brand'>
                    <a className='nav-link' >Watchlist <span class='sr-only'></span></a>
                </li>
                <button type="button" class="btn btn-lg btn-primary" disabled>{toWatch}</button>
                </ul>
            </div>
            </nav>
    )
}

export default Navbar
