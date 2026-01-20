import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Update from "./pages/update/Update";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/add",
        element: <Add />
      },
      {
        path: "/update",
        element: <Update />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
