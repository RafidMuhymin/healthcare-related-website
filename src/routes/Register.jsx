import React from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register({ auth, user, setUser }) {
  if (user.uid) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          ).catch(({ message }) => {
            throw new Error(message);
          });
          setUser(user);
          navigate("/");
        }}
      >
        <label>Email</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label>Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <button type="submit">Register</button>
      </form>
      <p>Or,</p>
      <button
        onClick={async () => {
          const { user } = await signInWithPopup(auth, provider).catch(
            ({ message }) => {
              throw new Error(message);
            }
          );
          setUser(user);
          navigate("/");
        }}
      >
        Login with Google
      </button>
    </div>
  );
}
