import axios from "axios";
import { useEffect, useState } from "react";
import './banner.css';

const API_KEY = '8ed05b5fa955158eae5c9df5c9d257ea';
const BASE_URL = 'https://api.themoviedb.org/3';

const Banner = () => {
  const [posterUrl , setPosterUrl] = useState('');
  const [movieOverview, setMovieOverview] = useState('');
  const [movieTitle, setMovieTitle] = useState('');

  useEffect(()=> {
    const fetchMovie = async () => {
    try { const movieEndpoint = `${BASE_URL}/trending/all/week?api_key=${API_KEY}`;
      const movieResponse = await axios.get(movieEndpoint);
      const movies = movieResponse.data.results;
      

      const randomMovie = movies[Math.floor(Math.random() * movies.length )]
      setMovieTitle(randomMovie.title?randomMovie.title: randomMovie.name);
      setMovieOverview(randomMovie.overview);
      setPosterUrl(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`)
  }
  catch (error) {
        console.error(error.message, 'Fetching error');
        
      }

    }
    fetchMovie()
  }, [])

  return (
    <div width= '100vw'>
      <div className="banner" style={{backgroundImage: posterUrl}}>
      <img className="movie-poster" src={posterUrl} alt={`${movieTitle} Poster`} />
      <div className="banner-navigation">
        <h1 className="movie-title">
         {movieTitle}
        </h1>
        <div className="buttons">
          <button>Play</button>
          <button>List</button>
        </div>
        <p className="movie-description">
         {movieOverview}
        </p>

      </div>

    </div>
    </div>
  )
}

export default Banner;