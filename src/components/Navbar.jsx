import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigation = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigation("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between pt-7 px-14 absolute w-full z-50">
      <Link to="/">
        <div className="h-10 cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="Netflix-Logo"
            className="w-full h-full"
          />
        </div>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white mx-2">Account</button>
          </Link>
          <button
            onClick={handleLogOut}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white mx-2">Sign In</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
