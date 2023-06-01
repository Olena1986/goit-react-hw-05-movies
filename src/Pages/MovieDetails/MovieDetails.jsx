import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { MovieDetailStyle } from './MovieDetail.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '9477f76437eb927cec9a7f94dd098501';
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

        const response = await axios.get(url);
        setMovieDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
   <>
      
        <button type="button" onClick={() => navigate('/')}>
          Go back
      </button>
      <MovieDetailStyle.MovieDetailsContainer>
        <MovieDetailStyle.MovieImage src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
      <MovieDetailStyle.MovieInfo>
          <MovieDetailStyle.MovieTitle>{movieDetails.title}</MovieDetailStyle.MovieTitle>
          <p>User Score: {movieDetails.vote_average}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movieDetails.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </MovieDetailStyle.MovieInfo>
         </MovieDetailStyle.MovieDetailsContainer>
       <MovieDetailStyle.MovieAdition>
          <MovieDetailStyle.StyleSubtitle>Additional information</MovieDetailStyle.StyleSubtitle>
          <MovieDetailStyle.StyledLink to="cast">Cast</MovieDetailStyle.StyledLink>
          <MovieDetailStyle.StyledLink to="reviews">Reviews</MovieDetailStyle.StyledLink>
       </MovieDetailStyle.MovieAdition>
        <Outlet/>
     
   </>
  );
};

export default MovieDetails;

