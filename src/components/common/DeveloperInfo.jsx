import React from "react";
import { Link } from "react-router";

export default function DeveloperInfo() {
  return (
    <div className="text-center mb-5">
      <h1 className="text-sm ">
        Design and Develop by{" "}
        <Link
          to="https://www.linkedin.com/in/shofiq-it/"
          target="_blank"
          className="underline  text-blue-500"
        >
          {" "}
         Md Shofikul Islam
        </Link>
      </h1>
    </div>
  );
}
