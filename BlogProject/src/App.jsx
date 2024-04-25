import "./App.css";
import React, { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logOut } from "./store/authenticationSlice";
import { Header, Footer } from "./components/index";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCuurentUser()
      .then((userData) => {
        /* if userData to dispatch kardo login method ko else dispatch logOut okay. */
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => setLoading(false));
  });

  if (!loading) {
    return (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          {/* <main>TODO: <Outlet /></main> */}
          <Footer />
        </div>
      </div>
    )
  } else{
    return null
  }
}

export default App;
