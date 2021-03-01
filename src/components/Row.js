import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../actions/movieActions";
import "../Styles/Row.css";
function Row() {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const {
    trending,
    netflixOriginals,
    topRated,
    action,
    horror,
    comedy,
    romance,
    documentaries,
  } = useSelector((state) => state.movies);
  return (
    <div className="row">
      <h2>Trending Movies</h2>
      <div className="row__MainPoster">
        {trending &&
          trending.map((movie) => (
            <img
              key={movie.id}
              class="row__poster"
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
      </div>
      <h2>Netflix Originals</h2>
      <div className="row__posters">
        {netflixOriginals &&
          netflixOriginals.map((movie) => (
            <img
              key={movie.id}
              class="row__poster"
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
      </div>
      <h2>Top Rated Movies</h2>
      <div className="row__posters">
        {topRated &&
          topRated.map((movie) => (
            <img
              key={movie.id}
              class="row__poster"
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
      </div>
      <h2>Action Movies</h2>
      <div className="row__posters">
        {action &&
          action.map((movie) => (
            <img
              key={movie.id}
              class="row__poster"
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
      </div>
      <h2>Horror Movies</h2>
      <div className="row__posters">
        {horror &&
          horror.map((movie) => (
            <img
              key={movie.id}
              class="row__poster"
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
      </div>
      <h2>Comedy Movies</h2>
      <div className="row__posters">
        {comedy &&
          comedy.map((movie) => (
            <img
              key={movie.id}
              class="row__poster"
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
      </div>
      <h2>Romance Movies</h2>
      <div className="row__posters">
        {romance &&
          romance.map((movie) => (
            <img
              key={movie.id}
              class="row__poster"
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
      </div>
      <h2>Documentaries</h2>
      <div className="row__posters">
        {documentaries &&
          documentaries.map((movie) => (
            <img
              key={movie.id}
              class="row__poster"
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
      </div>
    </div>
  );
}

export default Row;
