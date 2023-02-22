import React from "react";
import DishCard from "../../components/DishCard/Dishcard";
import "./HomePage.css";
import Devices from "../../utils/Device";
import MainLayout from "../../layouts/MainLayout";

export default function HomePage() {
  const [SidebarExpanded, setSidebarExpanded] = React.useState(false);
  const Device = Devices();

  let ele = [];
  for(let i = 0; i < 20; i++) ele.push(<DishCard />);

  return (
    <MainLayout
      device={Device}
      sidebarExpanded={SidebarExpanded}
      setSidebarExpanded={setSidebarExpanded}
    >
      <main className="homepage--grid">
          {ele}
      </main>
    </MainLayout>
  )
}