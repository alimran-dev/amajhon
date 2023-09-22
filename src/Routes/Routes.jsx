import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import DashboardLayout from "../Layouts/DashboardLayout";

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
        loader: () => fetch("https://dummyjson.com/products"),
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
        //   {
        //     path: "/dashboard",
        //     element: <div>Hello dashboard</div>,
        //   },
          {
            path: "/dashboard/profile",
            element: <div>Hello from profile</div>,
          },
          {
            path: "/dashboard/editProfile",
            element: <div>Hello from edit profile</div>,
          },
        ],
      },
    ],
  },
]);

export default routes;
