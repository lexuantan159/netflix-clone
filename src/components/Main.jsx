import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="w-full h-[600px] text-white relative">
        
          <div className="absolute w-full h-[600px]  bg-gradient-to-r from-black z-10 "></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        

        <div className="absolute bottom-[15%] px-2 sm:px-4 md:px-12 w-[70%] md:w-[90%] lg:w-full z-50">
          <h1 className="text-white text-3xl sm:text-4xl font-bold md:text-4xl lg:md:text-6xl">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className="bg-white hover:bg-white/75 px-6 py-2 text-black font-bold rounded text-xl cursor-pointer mr-4">
              Play
            </button>
            <button className="bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] px-4 py-2 text-white font-bold rounded text-xl cursor-pointer">
              More info
            </button>
          </div>
          <p className="text-gray-300 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="text-white-400 mb-5">
            {truncatedString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
