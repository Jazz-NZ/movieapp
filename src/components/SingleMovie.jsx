import React from 'react'

function SingleMovie({movie}) {
    return (
        
            <div class="col-4" style={{width:"5rem"}}>
        <div className='card' >
       <img class="card-img-top" src="https:/picsum.photos/200" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.desc}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
     </div>
    )
}

export default SingleMovie
