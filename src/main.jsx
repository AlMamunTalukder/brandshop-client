import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import PrivateHook from "./components/Hook/PrivateHook.jsx";
import AddProduct from "./components/AddProduct/AddProduct";
import Login from "./components/Login/Login.jsx";
import Registration from "./components/Registration/Registration.jsx";
import MyCart from "./components/MyCart/MyCart.jsx";
import Error from "./components/Error/Error.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AuthProvider from "./components/Hook/AuthProvider";
import BrandCars from "./components/BrandCars/BrandCars";
import CarDetails from "./components/Details/CarDetails";

import PrivateHook from "./components/Hook/PrivateHook";
import Update from "./components/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/addProducts",
        element: (
          <PrivateHook>
            <AddProduct />
          </PrivateHook>
        ),
      },

      {
        path: "/signIn",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/brandCars",
        element: <BrandCars />,
        loader: () =>
          fetch("https://brand-shop-server-ivory.vercel.app/addProduct"),
      },
      {
        path: "/carDetails/:id",
        element: <CarDetails />,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-ivory.vercel.app/addProduct/${params.id}`
          ),
      },
      {
        path: "/updateCar/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-ivory.vercel.app/addProduct/${params.id}`
          ),
      },
      {
        path: "/myCarts",
        element: <MyCart />,
        loader: () =>
          fetch("https://brand-shop-server-ivory.vercel.app/getCartData"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
