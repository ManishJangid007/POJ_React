import React from "react";
import CloseIco from "../assets/icons/close.png";
import HeartIco from "../assets/icons/heart_white.png";
import HeartFilledIco from "../assets/icons/heart_filled_small.png";
import TimeIco from "../assets/icons/time.png";
import FoodImg from "../assets/images/food1.jpg";
import "./Recipe.css";

export default function Recipe() {
    return (
        <div className="recipe">
            <div className="recipe--img--div">
                <div className="recipe--img--div2">
                    <div className="recipe--img--div3">
                        <div className="recipe--blackcircle">
                            <img src={CloseIco} alt="close icon" />
                        </div>
                        <div className="recipe--von"></div>
                    </div>
                    <div className="recipe--blackcircle">
                        <img src={HeartIco} alt="heart icon" />
                    </div>
                </div>
                <img src={FoodImg} alt="food img" className="recipe--img" />
            </div>
            <div className="recipe--title--div">
                <h2>Dish Name</h2>
                <img src={TimeIco} alt="time icon" />
                <h4>45 Mins</h4>
            </div>
            <div className="recipe--ingredients">
                <h2>Ingredients :-</h2>
                <ol>
                    <li>Lorem.</li>
                    <li>Doloribus!</li>
                    <li>Officiis.</li>
                    <li>Ducimus?</li>
                    <li>Quis.</li>
                </ol>
            </div>
            <div className="recipe--recipe">
                <h2>Recipe :-</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni sequi delectus sed labore porro corporis commodi sunt! Perspiciatis molestiae ipsa facilis inventore quisquam harum quos quia odio, voluptas non nesciunt.</p>
            </div>
        </div>
    )
}