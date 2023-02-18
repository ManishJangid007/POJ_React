import React from "react";
import Header from "../components/Header/Header";
import Background from "../components/Background/Background";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";
import DishCard from "../components/DishCard/Dishcard";
import "./HomePage.css";
import Sidebar from "../components/Sidebar/Sidebar";

export default function HomePage(){
  const [SidebarExpanded, setSidebarExpanded] = React.useState(false);

  return (
    <>
      <Sidebar expanded={SidebarExpanded} collapse={() => setSidebarExpanded(false)} />
      <Background />
      <Header />
      <SearchBar expandSidebar={() => setSidebarExpanded(true)} />
      <Filters />
      <main>
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </main>
    </>
  )
}