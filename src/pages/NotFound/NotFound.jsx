import React from "react";
import "./NotFound.css"

export default function NotFound(props) {
    return (
        <div className="notfoundpage">
            <h1>{props.msg || "Not Found !"}</h1>
        </div>
    )
}