import React from "react";
import Header from "../components/Header/Header";
import Background from "../components/Background/Background";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import DishCard from "../components/DishCard/Dishcard";
import "./HomePage.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Devices from "../utils/Device";

export default function HomePage(){
  const [SidebarExpanded, setSidebarExpanded] = React.useState(false);
  const Device = Devices();
  return (
    <div className="homepage">
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
      <div className="homepage--main--content">
        <Background device={Device} />
        {Device.isMobile && <Header />}
        <SearchBar 
          expandSidebar={() => setSidebarExpanded(true)}
          device={Device}
        />
        <Filters />
        <div className="homepage--main--content--div">
          <main>
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
          </main>
        </div>
      </div>
    </div>
  )
}