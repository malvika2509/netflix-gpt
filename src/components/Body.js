import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import Firstpage from "./Firstpage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import ErrorPage from "../utils/error";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Firstpage></Firstpage> },
    { path: "/login", element: <Login></Login> },
    { path: "/browse", element: <Browse></Browse> },
    { path: "/error", element: <ErrorPage></ErrorPage> },
  ]);

  // useEFfect because i want to set up only once, this will used for all cases of logins and logouts

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
