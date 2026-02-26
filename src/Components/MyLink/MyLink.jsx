import React from 'react';
import { NavLink } from 'react-router-dom';

const MyLink = ({to, children, className}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-blue-700 text-xl font-semibold shadow-xl underline" : `${className} font-semibold text-white`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;