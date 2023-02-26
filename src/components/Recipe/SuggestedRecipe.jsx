import React from 'react';
import VegNonVeg from '../../utils/VegNonVeg';
import { useNavigate } from 'react-router-dom';
import "./SuggestedRecipe.css";

export default function SuggestedRecipe({ data }) {
    const navigate = useNavigate();
    const simplifiedTitle = () => {
        if (data.title.length < 35) {
            return data.title
        } else {
            return `${data.title.substring(0, 35)}...`
        }
    }

    return (
        <a className='suggested--atag' >
            <div className="suggested--recipe" onClick={() => navigate(`/recipe/${data.id}`)}>
                <img src={data.image} alt="food" />
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