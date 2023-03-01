import React from "react";
import DefaultFoodImage from "../../assets/images/default_food.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SearchCard({ data }) {
    return (
        <a className="searchcard--atag" href={`/recipe/${data.id}`}>
            <div className="searchpage--searchcard">
                <LazyLoadImage
                    src={data.image || DefaultFoodImage}
                    alt={data.title}
                    className="searchpage--searchcard--img"
                />
                <div className="searchcard--gradient"></div>
                <h2>{data.title}</h2>
            </div>
        </a>
    )
}