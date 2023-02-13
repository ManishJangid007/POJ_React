import React from "react";
import Blob1 from "../../assets/blobs/blob2.png";
import Blob2 from "../../assets/blobs/blob1.png";
import "./Background.css"

export default function Background() {
    return (
        <div className="background">
            <img src={Blob1} />
            <img src={Blob2} />
        </div>
    )
}