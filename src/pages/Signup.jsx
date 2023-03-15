import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp, setDocSignUp } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setDocSignUp(email);
      navigate("/");
    } catch (error) {
      console.log(error.message, "oke");
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
              <h1 className="text-4xl font-bold pb-7">Sign Up</h1>
              {/* display error if email-already-in-use */}
              {error ? (
                <p className="text-white bg-red-500 w-full rounded px-4 py-3 mb-2">
                  {error}
                </p>
              ) : null}
              <form onSubmit={handleSubmit} className="w-full h-full">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded bg-[#333333] p-3 my-2 outline-none"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full rounded bg-[#333333] p-3 my-2 outline-none"
                />
                <button className="bg-red-600 w-full rounded py-3 my-6 font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-gray-300">
                  <p>
                    <input className="mr-2 " type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>

                <p className="text-gray-400 mt-7">
                  New to Netflix?
                  <Link to="/login">
                    <span className="text-white text-xm hover:underline">
                      Sign in now
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

export default Signup;
