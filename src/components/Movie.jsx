import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState( false);
  const {user} = UserAuth()

  const movieId = doc(db,"users", `${user?.email}`)

  const saveShow = async () => {
    if(user?.email) {
      setLike(!like)
      setSaved(!saved)
      await updateDoc(movieId, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.poster_path
        }),
      })  
    }
    else {
      alert("Please login to save a movie")
    }
  }

  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[240px] inline-block mr-2 relative z-10 ">
      <img
        className="h-auto w-full rounded"
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.title}
      />
      <div className="w-full h-full absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-90 text-white cursor-pointer">
        <p className="text-sm md:text-xl text-center">
          {truncatedString(item?.title, 23)}
        </p>
        <p>
          {like ? (
            <FaHeart
              className="absolute top-1/2 left-2/4 text-4xl translate-x-[-50%] translate-y-[-50%] text-red-500"
              onClick={saveShow}
            />
          ) : (
            <FaRegHeart
              className="absolute top-1/2 left-2/4 text-4xl translate-x-[-50%] translate-y-[-50%]"
              onClick={saveShow}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
