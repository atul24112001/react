import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler =  useCallback(async function () {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.py4e.com/api/films/");

      if (!response.ok) {
        throw new Error("Something Went Wrong.")
      }

      const data = await response.json();

      const transformData = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl
        }
      })
      setMovies(transformData);
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false);
  }, [])
  
  useEffect(() => {
    fetchDataHandler()
  }, [fetchDataHandler])

  let content = <h3>No Movies to Show.</h3>;

  if(movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (error) {
    content = <h3>{error}</h3>
  }

  if (isLoading) {
    content = <h3>Loading...</h3>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchDataHandler} >Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
