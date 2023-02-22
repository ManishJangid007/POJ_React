import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";

export default function Item(props) {
    const navigate = useNavigate();
    const style = {
        color: props.selected ? "#373737" : "#858585"
    }
    return (
        <div 
            className={`sidebar--item ${props.selected && "sidebar--item--selected"}`}
            onClick={() => navigate(props.path)}
            >
            <img src={props.selected ? props.active_icon : props.icon} alt={props.title} />
            <h2 style={style}>{props.title}</h2>
        </div>
    )
}