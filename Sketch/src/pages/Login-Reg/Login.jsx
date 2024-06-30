import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle login logic
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 px-5 py-3 bg-white shadow-md z-10">
        <h3 className="text-xl">Sketch</h3>
      </nav>
      {error && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md">
          {error}
        </div>
      )}
      <div className="w-full min-h-screen flex flex-col md:flex-row pt-20 md:pt-0 overflow-auto">
        <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen p-5 md:p-20">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h3 className="text-3xl md:text-4xl">
              Welcome to
              <span className="text-blue-400 font-semibold"> Sketch</span>
            </h3>
            <h4 className="text-xl md:text-2xl mb-5">Create your account</h4>
            <form autoComplete="off" onSubmit={handleRegisterSubmit}>
              <input
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="text"
                placeholder="Full Name"
                name="fullname"
              />
              <input
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="bg-zinc-100 block w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="password"
                placeholder="Password"
                name="password"
              />
              <input
                className="px-5 rounded-full py-3 mt-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                type="submit"
                value="Create My Account"
              />
            </form>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen p-5 md:p-20">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h4 className="text-xl md:text-2xl capitalize mb-5">
              Login to your account
            </h4>
            <form autoComplete="off" onSubmit={handleLoginSubmit}>
              <input
                className="block bg-zinc-100 w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="block bg-zinc-100 w-full px-3 py-2 border-[1px] rounded-md mb-3 border-zinc-200"
                type="password"
                placeholder="Password"
                name="password"
              />
              <input
                className="px-5 block rounded-full py-3 mt-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
