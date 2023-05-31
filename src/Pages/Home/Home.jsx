import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
  try {
    const apiKey = '9477f76437eb927cec9a7f94dd098501';
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    const response = await axios.get(url);
    const moviesData = response.data.results; 
    setMovies(moviesData);
  } catch (error) {
    console.log(error);
  }
};

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies && movies.map((movie) => (
          <li key={movie.id}>
             <NavLink to={`movies/${movie.id.toString()}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

Home.propTypes = {
movies: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.number,
title: PropTypes.string,
})
),
};