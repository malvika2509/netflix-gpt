import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Firstpage from "./Firstpage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "../utils/error";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Firstpage></Firstpage> },
    { path: "/login", element: <Login></Login> },
    { path: "/browse", element: <Browse></Browse> },
    { path: "/error", element: <ErrorPage></ErrorPage> },
  ]);

  // useEFfect because i want to set up only once, this will used for all cases of logins and logouts

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
