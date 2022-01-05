import React from "react";

export default function Profile({ user }) {
  console.log(user);
  return (
    <div>
      <h1>Profile</h1>
      <h2>Name: {user.displayName}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
}
