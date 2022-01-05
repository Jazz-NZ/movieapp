import React from 'react'

function SingleMovie({movie, onAdd, type}) {
    return (
        
            
            <div className={type===1 ? "col-4" : "col-6"} style={{width:"5rem", padding : "20px"}}>
            {type === 1 ? (
              <>
                  <div className='card' >
                <img class="card-img-top" src={movie.mImage} alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.desc}</p>
                    <a className="btn btn-primary" onClick={() => onAdd(movie.id)}>Add to watchlist</a>
                  </div>
                </div>
            </>
            ) : (<>
               <div className="card">
                  <h5 className="card-header"></h5>
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.desc}</p>
                    <a href="#" className="btn btn-primary" onClick={() => onAdd(movie.id)}>Remove</a>
                  </div>
                </div>
            </>

            )}
            </div>
    )
}

export default SingleMovie
