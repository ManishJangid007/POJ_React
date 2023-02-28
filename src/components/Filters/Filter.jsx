import React from "react";
import "./Filter.css"

export default function Filter(props) {
    const style = {
        backgroundColor: props.selected ? "#FEB159" : "#F8D8BC"
    }

    return (
        <a className="filter" style={style} href={`/search?query=${props.name}`}>
            <label>{props.name}</label>
        </a>
    )
}