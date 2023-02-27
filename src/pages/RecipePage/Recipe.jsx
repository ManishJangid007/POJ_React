import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import RecipeTab from "../../components/Recipe/RecipeTab";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import NotFound from "../NotFound/NotFound";
import "./Recipe.css";

export default function Recipe() {
    const { id } = useParams();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { isLoading, error, data, refetch } = useQuery("getRecipe",
        () => axios.get(`/api/spn/recipe/${id}`)
            .then(res => res.data),
        {
            refetchOnWindowFocus: false
        }
    );

    useEffect(() => {
        refetch();
    }, [id]);

    useEffect(() => {
        axios.get("/api/user")
            .then(res => setIsAuthenticated(res.data.isAuthenticated))
    }, [])

    console.log("User Authenticated :", isAuthenticated);

    return (
        isLoading ?
            <Loading /> :
            data.success ?
                <RecipeTab
                    data={data.recipe}
                    showLike={isAuthenticated}
                /> :
                <NotFound />
    )
}
