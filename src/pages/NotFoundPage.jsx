import React from "react";

import { Link } from "react-router";
import FuzzyText from "../components/NotFoundPage/FuzzyText";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <FuzzyText
        baseIntensity={0.2}
        // hoverIntensity={hoverIntensity}
        // enableHover={enableHover}
        fontSize={150}
        fontWeight={500}
      >
        404
      </FuzzyText>

      <FuzzyText
        baseIntensity={0.2}
        // hoverIntensity={hoverIntensity}
        // enableHover={enableHover}
        fontSize={40}
        fontWeight={200}
      >
        page not found
      </FuzzyText>
      <button className="mt-8 px-6 py-2 bg-primary-color text-white rounded hover:bg-orange-400 transition-colors">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
}
