import React from "react";
import { useLoading } from "../../context/LoadingContext";

export default function Loader() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-color"></div>
        
        {/* Loading Text */}
        <p className="text-white mt-4 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}
