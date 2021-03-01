import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../Styles/Banner.css";
function Banner() {
  const [randomMovies, setRandomMovies] = useState([]);

  const { netflixOriginals } = useSelector((state) => state.movies);
  useEffect(() => {
    var i = Math.floor(Math.random() * 21);
    setRandomMovies(netflixOriginals[i]);
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={
        randomMovies && {
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovies?.backdrop_path}")`,
          backgroundPosition: "center center",
        }
      }
    >
      {randomMovies && (
        <div className="banner__content">
          <h1 className="banner__title">
            {randomMovies &&
              (randomMovies?.original_name || randomMovies?.name)}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {randomMovies && truncate(randomMovies?.overview, 150)}
          </h1>
          <div className="banner__fadein" />
        </div>
      )}
    </header>
  );
}

export default Banner;
