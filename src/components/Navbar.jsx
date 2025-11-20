import React from 'react';
import { NavLink } from 'react-router-dom';
import MyLink from './MyLink';

const Navbar = () => {
  return (
    <nav className="bg-black text-gray-300 py-6 px-10 md:px-28 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-wide">
          Game<span className="text-red-500">Hub</span>
        </h1>

        {/* Navigation Menu */}
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <MyLink to="/">Home</MyLink>
          </li>
          
          <li>
            <MyLink to="News">News</MyLink>
          </li>
          <li>
            <MyLink to="About-Us">About Us</MyLink>
          </li>
          <li>
            <MyLink to="Login">Login</MyLink>
          </li>
          <li>
            <MyLink to="Register">Register</MyLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

