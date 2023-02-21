import React from "react";
import RecipeMobile from "../components/Recipe/RecipeMobile";
import RecipeTab from "../components/Recipe/RecipeTab";
import Devices from "../utils/Device";
import Background from "../components/Background/Background";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Recipe.css";

export default function Recipe() {
    const [SidebarExpanded, setSidebarExpanded] = React.useState(false);
    const Device = Devices();
    if(Device.isMobile) return <RecipeMobile />
    else return (
        <div className="recipe--large">
            {
            Device.isDesktop ? 
                <Sidebar
                    expanded={true}
                    collapse={()=>{}}
                    device={Device}
                /> : 
                <Sidebar 
                    expanded={SidebarExpanded} 
                    collapse={() => setSidebarExpanded(false)} 
                    device={Device}
                />
            }
            <div className="recipe--large--maindiv">
                {!Device.isDesktop && <Background />}
                <SearchBar 
                    expandSidebar={() => setSidebarExpanded(true)}
                    device={Device}
                />
                <Filters />
                <RecipeTab />
            </div>
        </div>
    )
    
}

