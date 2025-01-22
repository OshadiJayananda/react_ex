import React from 'react';
import login_pg from "./images/login_pg.jpg";

export default function SignIn() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-black">
        {/* Add your image source here */}
        <img src={login_pg} alt="Books" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white bg-opacity-90">
        <h2 className="mb-5 text-2xl font-semibold">Sign In</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4 w-full">
            <label htmlFor="username" className="block mb-2 text-sm font-medium">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="w-full max-w-sm py-2 bg-[#003d73] text-white rounded-md text-lg hover:bg-[#0056a3]">
            Sign In
          </button>
        </form>
        <div className="mt-4">
          <a href="/forgot-password" className="block text-[#003d73] text-sm mb-2 hover:underline">Forgot Password</a>
          <a href="/login" className="block text-[#003d73] text-sm hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  )
}
