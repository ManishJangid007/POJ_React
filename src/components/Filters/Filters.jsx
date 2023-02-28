import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";

export default function Filters() {
    const [queryParameters] = useSearchParams();
    const getQuery = () => queryParameters.get('query')

    const [query, setQuery] = useState("");

    useEffect(() => {
        setQuery(getQuery());
    }, [getQuery()])

    const filters = [
        "Italian",
        "Spanish",
        "Chinese",
        "Burger",
        "Pizza",
        "Spicy",
        "Sweet",
        "Turkish",
        "Healthy",
        "Milk Shakes",
        "Fresh Juices",
        "Paneer",
        "Chicken",
        "Sea Food",
        "Pasta"
    ];

    return (
        <div className="filters">
            {filters.map(e => <Filter
                key={e}
                name={e}
                selected={e === query}
            />)}
        </div>
    )
}