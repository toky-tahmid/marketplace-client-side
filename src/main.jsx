import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error/Error";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import AddJob from "./Components/AddJob/AddJob";
import PostedJobs from "./Components/PostedJobs/PostedJobs";
import BidReq from "./Components/BidReq/BidReq";
import MyBids from "./Components/MyBids/MyBids";
import BidDetails from "./Components/BIdDetails/BidDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/jobs')
       
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addjobs",
        element: <AddJob></AddJob>,
      },
      {
        path: "/postedJobs",
        element: <PostedJobs></PostedJobs>,
      },
      {
        path: "/myBids",
        element: <MyBids></MyBids>,
      },
      {
        path: "/bidReq",
        element: <BidReq></BidReq>,
      },
      {
        path: "/jobs/:id",
        element: <BidDetails></BidDetails>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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
