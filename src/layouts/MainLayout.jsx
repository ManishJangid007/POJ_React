import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

export default function MainLayout(props) {
    const [SidebarExpanded, setSidebarExpanded] = React.useState(false);
    return (
        <div className="mainlayout">
            <Sidebar
                expanded={SidebarExpanded}
                collapse={() => setSidebarExpanded(false)}
            />

            <div className="mainlayout--maincontent">
                <Background />
                <Header />
                <SearchBar
                    expandSidebar={() => setSidebarExpanded(true)}
                />

                <div>
                    <Filters />
                </div>

                <div className="mainlayout--content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}