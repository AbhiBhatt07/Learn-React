import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authenticationSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    // actually yahan per logout() jo hain vo hame promise milta hain. jo ki appwrite deta hain.
    authService.logout().then(() => {
      /*Yai hamne isliye kiya hain because store ke ander logout ki state jo hain vo hamesha
    updated rahe. */
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logOutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
