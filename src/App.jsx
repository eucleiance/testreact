import { useEffect } from 'react'
import './App.css'
import Moviecard from './MovieCard';    // Importing Moviecard component from MovieCard.jsx
import { useState } from 'react';

const API_URL = "http://www.omdbapi.com?apikey=3e4214fe";
// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([])
  // movies variable is only editable with setMovies and useState has an array passed initially
  const [searchTerm, setSearchTerm] = useState('')
  // searchTerm is only editable w/ ... and useState has a string passed initially

  const searchMovies = async (title) => {
    // searchMovies is an async function with title argument passed
    const response = await fetch(`${API_URL}&s=${title}`);
    // response = wait until a link is fetched (api link w/ search arguments)
    const data = await response.json();
    // data = wait for reponse is parsed into json and parsed json = data
    // console.log(data);
    setMovies(data.Search);
    // movies variable = array of movies that is inside 'Search' property in the parsed json
  }

  useEffect(() => {
    searchMovies('Iron Man')
    // searchMovies will be ran on the first load with Iron Man passed as the argument
    // it'll only run once because it has an empty dependency array below
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder='Search for movies'
          // It sets the placeholder text behind the search box
          value={searchTerm}
          // The initial value is nothing since the initial string that was passed is an empty string
          onChange={(e) => setSearchTerm(e.target.value)}
        // When the input changes, then searchTerm is changed with setSearchTerm where the value is extracted with 
        // e.target.value  ->  element's value when input changes

        />
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        // When searchMovies is clicked on then searchTerm is passed on as the title and searchMovies fucntion runs aync
        />
      </div>

      {
        movies?.length > 0
          // When movies array exist and it is not less than 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                // Maps the movies array and passes the mapped as an argument
                <Moviecard movie={movie} />
                // Pass every key to the Moviecard component with the passed mapped item
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  )
}

export default App
