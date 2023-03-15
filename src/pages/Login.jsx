import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { logIn } = UserAuth();
  const [errors, setError] = useState(null);
  const navigate = useNavigate();
  const inputCheckBox = useRef();

  
  useEffect(() => {
    // set title bar
    document.title = "Sign In";
    // auto valid email and password
    if (
      localStorage.getItem("email") !== null &&
      localStorage.getItem("password") !== null
    ) {
      
      inputCheckBox.current.checked = true
      setEmail(localStorage.getItem("email"));
      setPassword(localStorage.getItem("password"));
      setRememberMe(!rememberMe )
    } 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      if (rememberMe) {
        // Store the user's email and password in a cookie or local storage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        // Remove any existing credentials from the cookie or local storage
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="w-full h-screen absolute object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/4af43f9f-8764-494f-a075-ba5c79c893f3/VN-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-gradient-to-b from-black/75 fixed top-0 left-0 w-full h-screen z-10 "></div>

        <div className="fixed w-full px-4 py-24 z-20 ">
          <div className="bg-black/75 max-w-[450px] h-[550px] mx-auto text-white">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-4xl font-bold pb-7">Sign In</h1>
              {/* display error if email and password not valid */}
              {errors ? (
                <p className="text-white bg-red-500 w-full rounded px-4 py-3 mb-2">
                  {errors}
                </p>
              ) : null}
              <form onSubmit={handleSubmit}>
                <div className="relative w-full group">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required="required"
                    className="w-full rounded bg-[#333333] p-3 my-2 outline-none "
                    autoComplete="email"
                    placeholder="Email"
                  />
                  {/* <span className="absolute left-0 px-3  py-5  ">Email</span> */}
                </div>
                <div className="relative w-full">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required="required"
                    className="w-full rounded bg-[#333333] p-3 my-2 outline-none "
                    placeholder="Password"
                  />
                  {/* <span className="absolute left-0 px-3  py-5">Password</span> */}
                </div>
                <button className="bg-red-600 w-full rounded py-3 my-6 font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-gray-300">
                  <p>
                    <input
                    id={"checked"}
                      ref={inputCheckBox}
                      className="mr-2 "
                      type="checkbox"
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>

                <p className="text-gray-400 mt-7">
                  New to Netflix?
                  <Link to="/signup">
                    <span className="text-white text-xm hover:underline">
                      Sign up now
                    </span>
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
