import React, { useEffect, useState } from 'react';
import DishCard from '../../components/DishCard/Dishcard';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import "../HomePage/HomePage.css";
import "./FavouritePage.css";


export default function FavouritePage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const recipes = [];

    useEffect(() => {
        axios.get('/api/user/')
            .then(res => setIsAuthenticated(res.data.isAuthenticated))
    }, []);

    return (
        isAuthenticated ?
            <div className="custom--grid">
                <h3>Recipes Goes Here</h3>
            </div> :
            <div className='fav--errmsg--div'>
                <h3>You Still Loged out 😆, Login ! 👉 </h3>
                <a href='/login'>Login</a>
            </div>
    )
}