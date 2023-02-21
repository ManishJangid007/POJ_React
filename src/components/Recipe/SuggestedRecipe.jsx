import React from 'react';
import Food from "../../assets/images/food2.jpg"
import "./SuggestedRecipe.css";

export default function SuggestedRecipe(){
    return (
        <div className="suggested--recipe">
            <img src={Food} alt="food" />
            <div className="suggested--title">
                <h2>A long long dish name
                    which does not fit in this box</h2>
                <div className="suggested--bottom--row">
                    <h4>45 mins</h4>
                    <div className="suggested--von"></div>
                </div>
            </div>
        </div>
    )
}