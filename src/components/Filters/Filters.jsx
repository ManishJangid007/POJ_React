import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";

export default function Filters() {
    const [queryParameters] = useSearchParams();
    const getQuery = () => queryParameters.get('query')

    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState([
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
        "Pasta",
        "Veg"
    ])

    useEffect(() => {
        if (filters.includes(getQuery())) {
            setFilters(prev => {
                const newFilters = prev.filter(e => e != getQuery());
                newFilters.unshift(getQuery());
                return [...newFilters];
            })
        }
        setQuery(getQuery());
    }, [getQuery()])

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