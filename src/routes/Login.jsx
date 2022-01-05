import React from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login({ auth, user, setUser }) {
  if (user.uid) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          const { user } = await signInWithEmailAndPassword(
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
        <button type="submit">Login</button>
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
