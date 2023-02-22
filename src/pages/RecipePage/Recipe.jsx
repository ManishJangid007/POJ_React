import React from "react";
import RecipeMobile from "../../components/Recipe/RecipeMobile";
import RecipeTab from "../../components/Recipe/RecipeTab";
import Devices from "../../utils/Device";
import MainLayout from "../../layouts/MainLayout";
import "./Recipe.css";

export default function Recipe() {
    const [SidebarExpanded, setSidebarExpanded] = React.useState(false);
    const Device = Devices();
    if(Device.isMobile) return <RecipeMobile />
    else return (
        <MainLayout 
            device={Device}
            sidebarExpanded={SidebarExpanded}
            setSidebarExpanded={setSidebarExpanded}
        >
                <RecipeTab />
        </MainLayout>
    )
}
