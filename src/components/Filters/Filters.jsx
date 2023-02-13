import React from "react";
import Filter from "./Filter";

export default function Filters() {
    return (
        <div className="filters">
            <Filter name="All" selected={true} />
            <Filter name="Italian" selected={false} />
            <Filter name="North Indian" selected={false} />
            <Filter name="South Indian" selected={false} />
            <Filter name="Veg" selected={false} />
            <Filter name="Non-Veg" selected={false} />
        </div>
    )
}