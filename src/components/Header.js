import React, { useEffect } from "react";
import logo from "../utils/image/logo.jpg";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);
  return (
    <div className="absolute top-0 left-0 z-10 w-full px-32 py-2">
      <div className="flex justify-between items-center bg-transparent ">
        {/* Logo Section */}
        <div>
          <img className="w-48 h-30" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
