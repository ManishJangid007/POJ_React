import React from "react";
import DefaultFoodImage from "../../assets/images/default_food.jpg"
import VegNonVeg from "../../utils/VegNonVeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./DishCard.css";

export default function DishCard(props) {
    const simplifiedTitle = () => {
        if (props.data.title.length < 36) {
            return props.data.title
        } else {
            return `${props.data.title.substring(0, 36)}...`
        }
    }

    return (
        <div className="dishcard">
            <LazyLoadImage
                src={props.data.image || DefaultFoodImage}
                alt="Food"
                className="dishcard--img"
                onClick={props.onClick} />
            <div className="dishcard--titlediv">
                <h2
                    onClick={props.onClick}
                >{simplifiedTitle()}</h2>
            </div>
            <label>{`${props.data.readyInMinutes} Mins`}</label>
            <div className="dishcard--lastrow">
                <div className="dishcard--von" style={VegNonVeg(props.data.vegetarian)}></div>
            </div>
        </div>
    )
}