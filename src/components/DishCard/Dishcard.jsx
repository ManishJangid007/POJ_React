import React from "react";
import "./DishCard.css";
import Heart from "../../assets/icons/heart.png"
import DefaultFoodImage from "../../assets/images/default_food.jpg"
import HeartFilled from "../../assets/icons/heart_filled.png"
import VegNonVeg from "../../utils/VegNonVeg";

export default function DishCard(props) {
    const [liked, setLiked] = React.useState(false);

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
                src={props.data.image || DefaultFoodImage}
                alt="Food"
                onClick={props.onClick} />
            <div className="dishcard--titlediv">
                <h2
                    onClick={props.onClick}
                >{simplifiedTitle()}</h2>
            </div>
            <h4>{`${props.data.readyInMinutes} Mins`}</h4>
            <div className="dishcard--lastrow">
                {props.showLike && <img
                    src={liked ? HeartFilled : Heart}
                    alt="heart icon"
                    onClick={() => setLiked(prev => !prev)}
                />}
                <div className="dishcard--von" style={VegNonVeg(props.data.vegetarian)}></div>
            </div>
        </div>
    )
}