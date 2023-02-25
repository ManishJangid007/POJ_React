import React from "react";
import DishCard from "../../components/DishCard/Dishcard";
import "./HomePage.css";

export default function HomePage() {
  let ele = [];
  const DishElement = [...Array(20).keys()].map((e) => <DishCard key={e} />)
  return (
    <main className="custom--grid">
      {DishElement}
    </main>
  )
}