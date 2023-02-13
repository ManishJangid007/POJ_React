import React from "react";
import "./Item.css";

export default function Item(props) {
    const style = {
        color: props.selected ? "#373737" : "#858585"
    }
    return (
        <div className={`sidebar--item ${props.selected && "sidebar--item--selected"}`}>
            <img src={props.selected ? props.active_icon : props.icon} alt={props.title} />
            <h2 style={style}>{props.title}</h2>
        </div>
    )
}