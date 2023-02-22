import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Recipe from "../pages/RecipePage/Recipe";
import Login from "../pages/LoginPage/Login";
import SignUp from "../pages/SignupPage/SignUp";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}