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
} from "react-router-dom";
import ErrorPage from "../utils/error";

// Auth Listener Component
const AuthListener = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { uid, email, displayName } = user;
        // Dispatch user info to Redux store
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse"); // Redirect to browse if user is logged in
      } else {
        // Clear user info and redirect to login
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

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
