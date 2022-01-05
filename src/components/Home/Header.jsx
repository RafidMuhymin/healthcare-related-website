import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer({ user, setUser }) {
  return (
    <div>
      <nav>
        <NavLink to="/home">Home</NavLink>
        {user.uid ? (
          <>
            <NavLink to="/profile">{user.displayName}</NavLink>
            <NavLink to="/services">Services</NavLink>
            <button
              className="text-blue-600 no-underline hover:underline text-[1.1rem] bg-transparent"
              onClick={() => setUser(false)}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </div>
  );
}
