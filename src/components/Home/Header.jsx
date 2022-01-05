import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer({ auth, user, setUser }) {
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
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    setUser({});
                  })
                  .catch(({ error }) => {
                    throw new Error(error.message);
                  });
              }}
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
