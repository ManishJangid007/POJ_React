import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import "./MainLayout.css";

export default function MainLayout(props) {
    return (
        <div className="mainlayout">
            {
                props.device.isDesktop ? 
                    <Sidebar
                        expanded={true}
                        collapse={()=>{}}
                        device={props.device}
                    /> : 
                    <Sidebar 
                        expanded={props.sidebarExpanded} 
                        collapse={() => props.setSidebarExpanded(false)} 
                        device={props.device}
                    />
            }

            <div className="mainlayout--maincontent">
                {!props.device.isDesktop && <Background />}
                {props.device.isMobile && <Header />}
                <SearchBar 
                    expandSidebar={() => props.setSidebarExpanded(true)}
                    device={props.device}
                />
                <div>
                    <Filters />
                </div>
                <div className="mainlayout--content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}