import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";

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
        loader: ({params})=>fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/dashboard",
        element: <div>Hello from dashboard</div>,
      },
    ],
  },
]);

export default routes;
