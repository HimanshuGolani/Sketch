import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login-Reg/Login";
import { useAppState } from "./Context/useAppContext";
import Home from "./pages/Home/Home";

const App = () => {
  const { auth } = useAppState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
