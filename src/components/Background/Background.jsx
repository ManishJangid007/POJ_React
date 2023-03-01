import React from "react";
import Blob1 from "../../assets/blobs/blob2.png";
import Blob2 from "../../assets/blobs/blob1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Background.css"

export default function Background() {
    return (
        <div className="background">
            <LazyLoadImage
                src={Blob1} alt="blob"
                className="background--img"
            />
            <LazyLoadImage
                src={Blob2} alt="blob"
                className="background--img"
            />
        </div>
    )
}