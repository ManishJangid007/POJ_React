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

    const { data, refetch, isFetching } = useQuery("getRecipe",
        () => axios.get(`/api/spn/recipe/${id}`)
            .then(res => res.data),
        {
            refetchOnWindowFocus: false
        }
    );

    useEffect(() => {
        refetch();
        axios.get("/api/user")
            .then(res => setIsAuthenticated(res.data.isAuthenticated))
    }, [id]);

    return (
        isFetching ?
            <Loading /> :
            data.success ?
                <RecipeTab
                    data={data.recipe}
                    showLike={isAuthenticated}
                /> :
                <NotFound />
    )
}
