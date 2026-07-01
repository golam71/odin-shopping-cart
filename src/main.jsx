import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Home from "./home/Home.jsx";
import Products from "./prodcuts/Products.jsx";
import fetchData from "./prodcuts/fetchData.js";
import Cart from "./cart/Cart.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "/products",
        loader: async () => {
          return { productData: await fetchData() };
        },

        Component: Products,
      },
      { path: "/cart", Component: Cart },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
