import React from 'react';
import { NavLink } from 'react-router-dom';

const MyLink = ({ to, children }) => {
    return (
        <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "hover:text-red-500 transition-all duration-300"
              }
            >
              {children}
            </NavLink>
    );
};

export default MyLink;