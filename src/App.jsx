import React from "react";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import SearchBar from "./components/SearchBar/SearchBar";
import Filters from "./components/Filters/Filters";
import DishCard from "./components/DishCard/Dishcard";
import "./App.css";

export default function App(){
  return (
    <>
      <Background />
      <Header />
      <SearchBar />
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