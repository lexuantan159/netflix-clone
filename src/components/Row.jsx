import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Row = ({ rowId, title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const handleScrollLeft = () => {
    const previousScroll = document.querySelector("#slides" + rowId);

    previousScroll.scrollLeft -= 500;
  };

  const handleScrollRight = () => {
    const nextScroll = document.querySelector("#slides" + rowId);

    nextScroll.scrollLeft += 500;
  };

  // get data from API
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  return (
    <>
      <h2 className=" text-white text-1xl md:text-2xl font-bold mb-3 p-4 ">
        {title}
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={handleScrollLeft}
          className="absolute  left-0 top-0 bottom-0 h-full w-[3.65%] text-white rounded bg-black/25 opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slides" + rowId}
          className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {/* render list movie */}
          {movies.map((movie, id) => {
            return <Movie key={id} item={movie} />;
          })}
        </div>
        <MdChevronRight
          onClick={handleScrollRight}
          className="absolute  right-0 top-0 bottom-0 h-full w-[3.65%] text-white rounded bg-black/25 opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
