import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Movie from "../Movie";
import Header from "../pages/Header";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie" element={<Movie />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
