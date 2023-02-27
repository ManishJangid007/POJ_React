import React, { useEffect, useState } from 'react';
import DishCard from '../../components/DishCard/Dishcard';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { useQuery } from 'react-query';
import "../HomePage/HomePage.css";
import "./FavouritePage.css";
import { useNavigate } from 'react-router-dom';


export default function FavouritePage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const { isLoading, error, data } = useQuery("getFavouriteRecipes",
        () => axios.get("/api/spn/favourite_recipes")
            .then(res => res.data),
        {
            refetchOnWindowFocus: false
        }
    )

    useEffect(() => {
        axios.get('/api/user/')
            .then(res => setIsAuthenticated(res.data.isAuthenticated))
    }, []);

    return (
        isLoading ? <Loading /> :
            isAuthenticated ?
                data.success ?
                    data.recipes.length > 0 ?
                        <div className="custom--grid">
                            {data.recipes.map(recipe => <DishCard
                                key={recipe.recipeId}
                                data={
                                    {
                                        title: recipe.title,
                                        image: recipe.imageUrl,
                                        readyInMinutes: recipe.time,
                                        vegetarian: recipe.veg
                                    }
                                }
                                onClick={() => navigate(`/favourite/recipe/${recipe.recipeId}`)}
                            />)}
                        </div> :
                        <ErrorMessage>
                            <h3>It's Empty Here ! 😒</h3>
                        </ErrorMessage>
                    :
                    <ErrorMessage>
                        <h3>Something Went Wrong ! 😥 </h3>
                    </ErrorMessage>
                :
                <ErrorMessage>
                    <h3>You Still Loged out 😆, Login ! 👉 </h3>
                    <a href='/login'>Login</a>
                </ErrorMessage>
    )
}

function ErrorMessage(props) {
    return (
        <div className='fav--errmsg--div'>
            {props.children}
        </div>
    )
}