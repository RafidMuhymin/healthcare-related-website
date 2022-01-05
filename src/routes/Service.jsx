import React from "react";
import { useParams } from "react-router-dom";

export default function Service() {
  const params = useParams();
  return (
    <div>
      <h1>Service {params.serviceID}</h1>
      <img src="https://via.placeholder.com/300x200" alt="placeholder" />
      <h2>Detailed Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        iure architecto, neque sapiente reprehenderit repudiandae ullam culpa
        necessitatibus repellat omnis numquam officia quibusdam? Nulla adipisci,
        illum temporibus error earum molestias eum nobis necessitatibus esse ex
        laudantium. Animi natus aut quasi?
      </p>
      <p>
        Ad explicabo voluptatibus animi maxime illo ea autem atque maiores ab,
        magni nulla quos inventore obcaecati! Voluptas delectus sit expedita
        eius voluptatum quo culpa nam praesentium alias adipisci, quasi placeat
        optio dolorem quam animi provident doloremque laboriosam dolorum
        voluptates dolore!
      </p>
      <p>
        Accusantium blanditiis nulla, tenetur hic quaerat quisquam minus
        voluptatem asperiores. Quibusdam, quia? Earum assumenda suscipit unde
        architecto odit natus maiores quibusdam rerum vel quam harum ex
        molestiae aut at eius, deleniti exercitationem animi distinctio
        accusantium, ea corporis, illo ab. Sit?
      </p>
    </div>
  );
}
