import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About/About.jsx";
import CommentsPage from './Pages/CommentsPage/CommentsPage.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/comments",
    element: <CommentsPage/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />.
  </React.StrictMode>
);
