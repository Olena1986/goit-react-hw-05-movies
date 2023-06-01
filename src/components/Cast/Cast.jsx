import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CastStyle } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const apiKey = '9477f76437eb927cec9a7f94dd098501';
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

        const response = await axios.get(url);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <CastStyle.CastWrapper>
      {cast.length > 0 ? (
        <CastStyle.CastList>
          {cast.map((actor) => (
            <CastStyle.CastItem key={actor.id}>
              {actor.profile_path ? (
                <CastStyle.ActorImage
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <CastStyle.PlaceholderImage
                  src="placeholder-image.jpg"
                  alt="Placeholder"
                />
              )}
              <CastStyle.ActorName>{actor.name}</CastStyle.ActorName>
              <CastStyle.ActorRole>Character: {actor.character}</CastStyle.ActorRole>
            </CastStyle.CastItem>
          ))}
        </CastStyle.CastList>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </CastStyle.CastWrapper>
  );
};

export default Cast;

