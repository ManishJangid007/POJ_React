import React from "react";
import CloseIco from "../../assets/icons/close.png";
import { useNavigate } from "react-router-dom";
import HeartIco from "../../assets/icons/heart_white.png";
import HeartFilledIco from "../../assets/icons/heart_filled_small.png";
import Food1 from "../../assets/images/food2.jpg";
import TimeIco from "../../assets/icons/time.png";
import SuggestedRecipe from "./SuggestedRecipe";
import "./RecipeTab.css";

export default function RecipeTab() {
    const navigate = useNavigate();
    const [liked, setLiked] = React.useState(false);
    const like = () => setLiked(prev => !prev);
    return  (
        <div className="recipetab">
            <div className="recipetab--innerdiv">
                <div className="recipetab--head">
                        <div className="recipetab--blackcircle">
                            <img src={CloseIco} alt="close icon" onClick={() => navigate(-1)} />
                        </div>
                        <div className="recipetab--von"></div>
                </div>
                <div className="recipetab--maindiv">
                    <div className="recipetab--recipe">
                        <div className="recipetab--imgbase">
                            <img src={Food1} alt="Food Img" />
                            <div className="recipetab--imgforeground">
                                <div className="recipetab--blackcircle" onClick={like}>
                                    <img src={liked ? HeartFilledIco : HeartIco} alt="heart icon" />
                                </div>
                            </div>
                        </div>
                        <div className="recipetab--dishtitle">
                            <h2 className="recipetab--title">Dish Name</h2>
                            <img src={TimeIco} alt="time png" />
                            <h4 className="recipetab--time">45 mins</h4>
                        </div>
                        <div className="recipetab--ingredients">
                            <h2>Ingredients :-</h2>
                            <ol>
                                <li>Lorem.</li>
                                <li>Voluptates.</li>
                                <li>Obcaecati!</li>
                                <li>Facere.</li>
                                <li>Delectus.</li>
                            </ol>
                        </div>
                        <div className="recipetab--actualrecipe">
                            <h2>Recipe :-</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi quos sit praesentium cumque corrupti quasi suscipit minus deserunt non ducimus perspiciatis hic voluptate vero architecto illum vitae expedita sed, doloribus odio beatae. Aperiam itaque sint esse fugiat. Rem obcaecati accusantium inventore ut! Atque nihil vel est aliquid quis ab.</p>
                        </div>
                    </div>
                    <div className="recipetab--suggestion">
                        <SuggestedRecipe />
                        <SuggestedRecipe />
                        <SuggestedRecipe />
                        <SuggestedRecipe />
                        <SuggestedRecipe />
                    </div>
                </div>
            </div>
        </div>
    )
}