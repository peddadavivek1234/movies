import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/singup/SingUp";
import MovieList from "./components/apifetch/ApiFetch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<MovieList />} />
    </Routes>
  );
};

export default App;
