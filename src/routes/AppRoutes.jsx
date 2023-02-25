import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Recipe from "../pages/RecipePage/Recipe";
import Login from "../pages/LoginPage/Login";
import SignUp from "../pages/SignupPage/SignUp";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import DietPlannerPage from "../pages/DietPlannerPage/DietPlannerPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import MainLayout from "../layouts/MainLayout";
import Devices from "../utils/Device";


export default function AppRoutes() {
    const [SidebarExpanded, setSidebarExpanded] = React.useState(false);
    const Device = Devices();
    return (
        <Routes>
            <Route path="/" element={<MainLayout
                device={Device}
                sidebarExpanded={SidebarExpanded}
                setSidebarExpanded={setSidebarExpanded}
            />}>
                <Route index element={<HomePage />} />
                <Route path="/favourite" element={<FavouritePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/diet_planner" element={<DietPlannerPage />} />
                <Route path="/about_us" element={<AboutPage />} />
                <Route path="/favourite/recipe/:id" element={<Recipe />} />
                <Route path="/recipe/:id" element={<Recipe />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}