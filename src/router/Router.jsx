import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PackagePage from "../pages/PackagePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";
import Layout from "../layout/Layout";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "packages", Component: PackagePage },
      { path: "*", Component: NotFoundPage },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default router;
