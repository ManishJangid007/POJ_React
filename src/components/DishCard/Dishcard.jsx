import React from "react";
import "./DishCard.css";
import Heart from "../../assets/icons/heart.png"
import HeartFilled from "../../assets/icons/heart_filled.png"
import Food from "../../assets/images/food1.jpg";

export default function DishCard() {
    return (
        <div className="dishcard">
            <img src={Food} alt="Food" />
            <h2>Dish Name</h2>
            <h4>Category</h4>
            <div className="dishcard--lastrow">
                <img src={HeartFilled} alt="heart icon" />
                <div className="dishcard--von"></div>
            </div>
        </div>
    )
}