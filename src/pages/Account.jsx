import React, { useEffect } from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {

  useEffect(() => {
    document.title = 'Account';
  }, []);

  return (
    <>
      <div className="w-full h-[500px] relative">
        <div className="w-full h-full">
          <div className="absolute w-full h-full  bg-black/75 z-10"></div>
          <img
            className="w-full h-full object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/4af43f9f-8764-494f-a075-ba5c79c893f3/VN-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="/"
          />
        </div>

        <div className="absolute bottom-[40%] px-12 w-[70%] md:w-[90%] lg:w-full z-50 ">
          <h1 className=" text-white text-3xl sm:text-4xl font-bold md:text-4xl lg:md:text-6xl">
            My Movies
          </h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
