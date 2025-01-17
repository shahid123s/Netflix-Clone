import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import './row.css';

const base_url = import.meta.env.VITE_BASE_URL;
const base_image_url = 'https://image.tmdb.org/t/p/w500/';
const api_key = import.meta.env.VITE_API_KEY;

const Rows = ({ fetchUrl, title }) => {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${base_url}${fetchUrl}?api_key=${api_key}`);
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, [fetchUrl, title]);

  const handleClick = async (movieId) => {
    console.log('Clicked movie ID:', movieId);
    if (isPlaying && trailerId && currentId ===movieId) {
      setTrailerId(null);
      setIsPlaying(false);
      setCurrentId(null)
      console.log('Trailer hidden');
    } else {
      const trailerUrl = `${base_url}/movie/${movieId}/videos?api_key=${api_key}&language=en-US`;
      try {
        const response = await axios.get(trailerUrl);
        const videos = response.data.results;

        if (videos.length > 0) {
          const trailer = videos.find(video => video.type === 'Trailer');
          if (trailer) {
            setTrailerId(trailer.key);
            setIsPlaying(true);
            setCurrentId(movieId)
            console.log('Trailer ID:', trailer.key);
          }
        }
      } catch (error) {
        console.error('Error fetching trailer:', error.message);
      }
    }
  };

  return (
    <div className="movie-list">
      <h1>{title}</h1>
      <div className="moviePosters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_image_url}${movie.poster_path}`}
            alt={movie.title || movie.name}
            onClick={() => handleClick(movie.id)}
          />
        ))}
       
      </div>
      {isPlaying && trailerId && (
          <div className="trailer">
            <YouTube
              videoId={trailerId}
              opts={{
                height: '300',
                width: '100%',
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          </div>
        )}
    </div>
  );
};

export default Rows;