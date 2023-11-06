import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import UserData from "./UserData";
import ModelBox from "./ModelBox";

const NaveRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="user" element={<UserData />}></Route>
          <Route path="modelBox" element={<ModelBox />}></Route>
        </Routes>
  
    </div>
  );
};

export default NaveRoute;
