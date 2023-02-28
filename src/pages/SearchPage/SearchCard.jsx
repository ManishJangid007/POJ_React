import React from "react";
import DefaultFoodImage from "../../assets/images/default_food.jpg";

export default function SearchCard({ data }) {
    return (
        <a className="searchcard--atag" href={`/recipe/${data.id}`}>
            <div className="searchpage--searchcard">
                <img src={data.image || DefaultFoodImage} alt={data.title} />
                <div className="searchcard--gradient"></div>
                <h2>{data.title}</h2>
            </div>
        </a>
    )
}