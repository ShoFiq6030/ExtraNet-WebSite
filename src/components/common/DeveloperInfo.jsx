import React from "react";
import { Link } from "react-router";

export default function DeveloperInfo() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">
        Design and Develop by{" "}
        <Link to="https://www.linkedin.com/in/shofiq-it/"> Shofiq</Link>
      </h1>
    </div>
  );
}
