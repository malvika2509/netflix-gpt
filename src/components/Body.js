import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice"; // Adjust the path to your Redux slice
import Login from "./Login";
import Browse from "./Browse";
import Firstpage from "./Firstpage";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

import ErrorPage from "../utils/error";

// Auth Listener Component
const AuthListener = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // Dispatch user info to Redux store
        dispatch(addUser({ uid, email, displayName }));

        // If user is logged in, allow navigation to the requested path or default to "/browse"
        if (location.pathname === "/login" || location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // Clear user info
        dispatch(removeUser());

        // Redirect to login only if the user is accessing a protected route
        if (location.pathname !== "/login" && location.pathname !== "/") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, location]);

  return <Outlet />; // Render the nested routes
};

// App Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthListener />, // Wrap routes with AuthListener
    children: [
      { path: "/", element: <Firstpage /> },
      { path: "/login", element: <Login /> },
      { path: "/browse", element: <Browse /> },
      { path: "/error", element: <ErrorPage /> },
    ],
  },
]);

// Main Body Component
const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
