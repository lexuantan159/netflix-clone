import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { TiDeleteOutline } from "react-icons/ti";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const movieRef = doc(db, "users", `${user?.email}`)

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
      console.log(doc.data()?.savedMovies);
    });
  }, [user?.email]);


  const deleteMovie = async (movieId) => {
    try {
        const result = movies.filter( (item) => item.id !== movieId)
        await updateDoc(movieRef, {
            savedMovies: result,
        })
    }catch (error) {
        console.log(error);
    }
  }

  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleScrollLeft = () => {
    const previousScroll = document.querySelector("#slider");

    previousScroll.scrollLeft -= 500;
  };

  const handleScrollRight = () => {
    const nextScroll = document.querySelector("#slider");

    nextScroll.scrollLeft += 500;
  };

  return (
    <>
      <h2 className=" text-white text-1xl md:text-2xl font-bold mb-3 p-4">
        My Movies
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={handleScrollLeft}
          className="absolute left-0 top-0 bottom-0 h-full w-[3.65%] text-white rounded bg-black/25 opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
          size={40}
        />

        <div
          id={"slider"}
          className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[240px] inline-block mr-2 relative z-10"
            >
              <img
                className="h-auto w-full rounded"
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt={movie?.title}
              />
              <div className="w-full h-full absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-90 text-white cursor-pointer">
                <p className="text-xl text-center">
                  {truncatedString(movie?.title, 20)}
                </p>

                <p>
                  <TiDeleteOutline className=" absolute top-1/2 left-2/4 text-6xl translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                    onClick={()=> deleteMovie(movie.id)}
                  />
                </p>
              </div>
            </div>
          ))}
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

export default SavedMovies;
