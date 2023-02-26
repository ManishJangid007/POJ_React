import React, { useEffect } from "react";
import RecipeTab from "../../components/Recipe/RecipeTab";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import "./Recipe.css";
import NotFound from "../NotFound/NotFound";

export default function Recipe() {
    const { id } = useParams();

    const { isLoading, error, data, refetch } = useQuery("getRecipe", () => axios.get(`/api/spn/recipe/${id}`)
        .then(res => res.data)
    );

    useEffect(() => {
        refetch();
    }, [id]);

    console.log(data);

    return (
        isLoading ?
            <Loading /> :
            data.success ?
                <RecipeTab
                    data={data.recipe}
                /> :
                <NotFound />
    )
}
