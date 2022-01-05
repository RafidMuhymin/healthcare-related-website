import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ user, element, ...props }) {
  if (user.uid) {
    return element;
  }
  return <Navigate to="/login" />;
}
