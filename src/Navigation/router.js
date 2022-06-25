import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
