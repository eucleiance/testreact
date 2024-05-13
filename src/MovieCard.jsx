import React from 'react';    // Importing React

const Moviecard = ({ movie }) => {    // New Component named Moviecard    and passing movie as props inside {}
  return (    // Return html
    <div className="movie">      {/* making a div with class movie */}
      <div>
        <p>{movie.Year}</p>        {/* printing year item of movie object */}
      </div>

      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="{movie1.Title}" />
        {/* if Poster item in movie prop is not equal to N/A then src = movie.Poster if not blah blah link */}
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>

    </div>
  )
}

export default Moviecard;
