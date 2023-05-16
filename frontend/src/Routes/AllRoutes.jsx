import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../page/Register";
import Login from "../page/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={"Home"} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
