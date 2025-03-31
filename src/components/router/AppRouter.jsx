import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../pages/Header";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Moive from "../Moive";

function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie" element={<Moive />} />
      </Routes>
    </>
  );
}

export default AppRouter;
