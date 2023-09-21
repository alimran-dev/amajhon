import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products/Products";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
          loader: () =>fetch("https://dummyjson.com/products"),
        element: <Products></Products>,
      },
        {
            path: "/dashboard",
            element: <div>Hello from dashboard</div>
      },
    ],
  },
]);

export default routes;
