import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { SearchStyle } from './SearchMovies.styled';


const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);
  const apiKey = '9477f76437eb927cec9a7f94dd098501';

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`http://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
      .then((response) => {
        setMovies(response.data.results);
        setSearched(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const noMoviesFound = movies.length === 0 && searched;

  return (
    <div>
    <SearchStyle.SearchWrap>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter a keyword"
        />
        <button onClick={handleSearch}>Search</button>
    </SearchStyle.SearchWrap>

      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        noMoviesFound && <p>No movies found.</p>
      )}
    </div>
  );
};

export default SearchMovies;




SearchMovies.propTypes = {
  movieId: PropTypes.string,
};
