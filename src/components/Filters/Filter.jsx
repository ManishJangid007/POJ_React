import React from "react";
import "./Filter.css"

export default function Filter(props) {
    const style = {
        backgroundColor: props.selected ? "#FEB159" : "#F8D8BC"
    }

    return (
        <div className="filter" style={style}>
            <h3>{props.name}</h3>
        </div>
    )
}