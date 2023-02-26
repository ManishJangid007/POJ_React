import React from 'react';
import "./SuggestedRecipe.css";
import VegNonVeg from '../../utils/VegNonVeg';

export default function SuggestedRecipe({ data }) {
    const simplifiedTitle = () => {
        if (data.title.length < 15) {
            return data.title
        } else {
            return `${data.title.substring(0, 15)}...`
        }
    }

    return (
        <a className='suggested--atag' onClick={() => { }}>
            <div className="suggested--recipe">
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