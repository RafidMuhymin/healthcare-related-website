import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <h1>Services</h1>
      <div className="flex">
        {Array.from({ length: 6 }).map((item, index) => (
          <div key={index}>
            <h2>Service {index + 1}</h2>
            <img src="https://via.placeholder.com/150" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              aliquam aut cupiditate ipsum perferendis corporis aperiam
              repellendus eveniet totam a.
            </p>
            <Link to={`/service/${index + 1}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
