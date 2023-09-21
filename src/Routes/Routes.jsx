import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";

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
        element: <div>Hello from products</div>,
      },
        {
            path: "/dashboard",
            element: <div>Hello from dashboard</div>
      },
    ],
  },
]);

export default routes;
