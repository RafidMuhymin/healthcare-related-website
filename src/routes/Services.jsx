import React from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>List of Services</h1>
      <select
        onChange={(e) => {
          const { value } = e.target;
          value && navigate(`/service/${value}`);
        }}
      >
        <option value="">Select a service</option>
        {Array.from({ length: 6 }).map((item, index) => (
          <option key={index} value={index + 1}>
            Service {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
