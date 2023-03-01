import React from 'react';
import VegNonVeg from '../../utils/VegNonVeg';
import DefaultFoodImage from "../../assets/images/default_food.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./SuggestedRecipe.css";

export default function SuggestedRecipe({ data }) {
    const simplifiedTitle = () => {
        if (data.title.length < 35) {
            return data.title
        } else {
            return `${data.title.substring(0, 35)}...`
        }
    }

    return (
        <a href={`/recipe/${data.id}`} className="suggested--atag">
            <div className="suggested--recipe">
                <LazyLoadImage
                    src={data.image || DefaultFoodImage}
                    alt="food"
                    className="suggested--recipe--img"
                />
                <div className="suggested--title">
                    <h2>{simplifiedTitle()}</h2>
                    <div className="suggested--bottom--row">
                        <h4>{`${data.readyInMinutes} Mins`}</h4>
                        <div className="suggested--von" style={VegNonVeg(data.vegetarian)}></div>
                    </div>
                </div>
            </div>
        </a>
    )
}