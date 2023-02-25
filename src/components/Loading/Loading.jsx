import React from "react";
import ReactLoading from "react-loading";

export default function Loading(props) {
    return (
        <ReactLoading
            type="spin"
            color="#FEB159"
            height={props.height || 45}
            width={props.width || 45}
        />
    )
}