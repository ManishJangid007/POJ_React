import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Recipe from "../pages/Recipe";

export default function AppRoutes() {
    return <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/recipe" element={<Recipe />}/>
        <Route path="/recipe/:id" element={<Recipe />}/>
    </Routes>
}