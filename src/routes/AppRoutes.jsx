import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Recipe from "../pages/Recipe";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export default function AppRoutes() {
    return <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/recipe" element={<Recipe />}/>
        <Route path="/recipe/:id" element={<Recipe />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
    </Routes>
}