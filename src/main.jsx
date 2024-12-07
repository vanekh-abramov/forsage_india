import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ProfileCard from "./pages/profileCard/ProfileCard.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/:slug",
//     element: <ProfileCard />,
//     errorElement: <NotFoundPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
