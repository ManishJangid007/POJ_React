import React from "react";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Item.css";

export default function Item(props) {

    return (
        <NavLink
            to={props.path}
            className={({ isActive }) =>
                isActive ? "sidebar--item sidebar--item--selected" : "sidebar--item"
            }
        >
            {({ isActive }) => {
                return <>
                    <LazyLoadImage
                        src={isActive ? props.active_icon : props.icon} alt={props.title}
                        className="sidebar--item--img"
                    />
                    <h2 style={
                        {
                            color: isActive ? "#373737" : "#858585"
                        }
                    }>{props.title}</h2>
                </>
            }}
        </NavLink>
    )
}
