import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

export default function Loading(props) {
    return (
        <div className="loading--div">
            <ReactLoading
                type="spin"
                color="#FEB159"
                height={props.height || 45}
                width={props.width || 45}
            />
        </div>
    )
}