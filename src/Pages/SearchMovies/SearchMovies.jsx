import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchStyle } from './SearchMovies.styled';


const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '9477f76437eb927cec9a7f94dd098501';
  const [searchParams, setSearchParams] = useSearchParams();
  const [searched, setSearched] = useState(false); 
  const query = searchParams.get('q');


   useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
      )
       .then(res => setMovies(res.data.results));
        setSearched(true);
  }, [query]);

  const handleSearch = e => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (searchValue === '') {
      return;
    }
    setSearchParams({ q: searchValue });

    e.target.reset();
  };

  const noMoviesFound = movies.length === 0 && searched;

  return (
    <form onSubmit={handleSearch}>
    <SearchStyle.SearchWrap>
        <input
          name="search"
          type="text"
          placeholder="Enter a keyword"
        />
        <button type='submit'>Search</button>
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
    </form>
  );
};

export default SearchMovies;




