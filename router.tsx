import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App";
import React from "react";
import StartScreen from "./src/components/StartScreen";
import Rules from "./src/components/Rules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <StartScreen />,
      },
      {
        path: "rules",
        element: <Rules />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
