import React from 'react';
import DishCard from '../../components/DishCard/Dishcard';
import "../HomePage/HomePage.css";


export default function FavouritePage() {
    return (
        <div className="custom--grid">
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
        </div>
    )
}