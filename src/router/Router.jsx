import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";

let router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    element: <h1>About Page</h1>,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
