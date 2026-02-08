import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router/Router";
import { LoadingProvider } from "./context/LoadingContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  </React.StrictMode>,
);
