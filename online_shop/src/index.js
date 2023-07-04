import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Account from "./components/Account";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemsList from "./components/ItemsList";
import FavouritesList from "./components/FavouritesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ItemsList />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "favourites",
        element: <FavouritesList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
