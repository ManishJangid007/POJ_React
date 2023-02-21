import React from "react";
import CloseIco from "../../assets/icons/close.png";
import HeartIco from "../../assets/icons/heart_white.png";
import HeartFilledIco from "../../assets/icons/heart_filled_small.png";
import TimeIco from "../../assets/icons/time.png";
import FoodImg from "../../assets/images/food2.jpg";
import { useNavigate } from "react-router-dom";
import SuggestedRecipe from "./SuggestedRecipe";
import "./RecipeMobile.css";

export default function RecipeMobile() {
    const navigate = useNavigate();
    const [liked, setLiked] = React.useState(false);
    const like = () => setLiked(prev => !prev);
    return (
        <div className="recipe">
            <div className="recipe--img--div">
                <div className="recipe--img--div2">
                    <div className="recipe--img--div3">
                        <div className="recipe--blackcircle">
                            <img src={CloseIco} alt="close icon" onClick={() => navigate(-1)} />
                        </div>
                        <div className="recipe--von"></div>
                    </div>
                    <div className="recipe--blackcircle" onClick={like}>
                        <img src={liked ? HeartFilledIco : HeartIco} alt="heart icon" />
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
                    Magni sequi delectus sed labore porro corporis commodi sunt! Perspiciatis molestiae ipsa facilis inventore quisquam harum quos quia odio, voluptas non nesciunt.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis possimus id illo quisquam architecto numquam culpa eum! Sunt quo eius fugiat rem. Labore unde quas commodi perspiciatis dolore, 
                    deleniti eum assumenda in consequatur dolor voluptates distinctio. Nulla, inventore. Nemo labore harum quibusdam laborum perspiciatis explicabo quis voluptatibus facere. Temporibus, provident. Consequuntur animi culpa similique? Ipsam accusamus temporibus dolorem totam beatae minima molestias ea sapiente provident! Est omnis provident dolore pariatur, veritatis sed. Molestias sequi aperiam vel repellendus eum et similique veritatis quidem iusto! Vitae aliquam ullam quod fugiat explicabo quos iure expedita mollitia similique harum labore, repudiandae nisi. Ab, laborum!</p>
            </div>
            <div className="recipe--suggestion">
                <SuggestedRecipe />
                <SuggestedRecipe />
                <SuggestedRecipe />
                <SuggestedRecipe />
                <SuggestedRecipe />
            </div>
        </div>
    )
}