import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/singup/SingUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
