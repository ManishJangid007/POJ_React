import React from "react";
import "./DishCard.css";
import Heart from "../../assets/icons/heart.png"
import HeartFilled from "../../assets/icons/heart_filled.png"
import { useNavigate } from "react-router-dom";

export default function DishCard(props) {
    const navigate = useNavigate();
    const [liked, setLiked] = React.useState(false);

    const vonStyle = {
        backgroundColor: props.data.vegetarian ? "#82B681" : "#F15F5F"
    }

    const simplifiedTitle = () => {
        if (props.data.title.length < 36) {
            return props.data.title
        } else {
            return `${props.data.title.substring(0, 36)}...`
        }
    }

    return (
        <div className="dishcard">
            <img
                src={props.data.image}
                alt="Food"
                onClick={() => navigate("/recipe/23")
                } />
            <div className="dishcard--titlediv">
                <h2
                    onClick={() => navigate("/recipe/23")}
                >{simplifiedTitle()}</h2>
            </div>
            <h4>{`${props.data.readyInMinutes} Mins`}</h4>
            <div className="dishcard--lastrow">
                <img
                    src={liked ? HeartFilled : Heart}
                    alt="heart icon"
                    onClick={() => setLiked(prev => !prev)}
                />
                <div className="dishcard--von" style={vonStyle}></div>
            </div>
        </div>
    )
}