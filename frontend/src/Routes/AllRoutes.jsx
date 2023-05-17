import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../page/Register";
import Login from "../page/Login";
import Dashboard from "../page/Dashboard";
import PrivateRoute from "../components/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
