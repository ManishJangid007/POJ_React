import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./SearchPage.css";
import "../HomePage/HomePage.css";

export default function SearchPage() {
    const [queryParameters] = useSearchParams();
    const getQuery = () => queryParameters.get("query");

    const { isFetching, data, refetch } = useQuery("getSearchResults",
        () => axios.get(`/api/spn/search_recipe?query=${getQuery()}`)
            .then(res => res.data),
        {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
        }
    );

    useEffect(() => {
        refetch();
    }, [getQuery()]);

    return (
        <div className="searchpage">
            {getQuery() ?
                <>
                    <h3 className="searchpage--title">Search Results of  "{getQuery()}"</h3>
                    {
                        isFetching ? <Loading /> :
                            data.recipes ?
                                data.recipes.length > 0 ?
                                    <div className="custom--grid">
                                        {data.recipes.map(recipe => <SearchCard
                                            key={recipe.id}
                                            data={recipe}
                                        />)}
                                    </div> :
                                    <ErrorMessage>
                                        <h3>Try Another Pharase ! 🧑‍💻</h3>
                                    </ErrorMessage>
                                :
                                <Loading />
                    }
                </> :
                <ErrorMessage>
                    <h3>Type Something... 👆</h3>
                </ErrorMessage>
            }
        </div>
    )
}