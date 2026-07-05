import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Home from "./home/Home.jsx";
import Products from "./products/Products.jsx";
import fetchData from "./products/fetchData.js";
import Cart from "./cart/Cart.jsx";
import RootErrorBoundary from "./misc/RootErrorBoundary.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    Component: App,
    ErrorBoundary: RootErrorBoundary,
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
