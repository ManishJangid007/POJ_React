import React from "react";
import "./DishCard.css";
import Heart from "../../assets/icons/heart.png"
import HeartFilled from "../../assets/icons/heart_filled.png"
import Food from "../../assets/images/food2.jpg";
import { useNavigate } from "react-router-dom";

export default function DishCard() {
    const navigate = useNavigate();
    const [liked, setLiked] = React.useState(false);

    return (
        <div className="dishcard">
            <img src={Food} alt="Food" onClick={() => navigate("/recipe")} />
            <h2>Dish Name</h2>
            <h4>Category</h4>
            <div className="dishcard--lastrow">
                <img 
                    src={liked ? HeartFilled : Heart} 
                    alt="heart icon" 
                    onClick={() => setLiked(prev => !prev)} 
                />
                <div className="dishcard--von"></div>
            </div>
        </div>
    )
}