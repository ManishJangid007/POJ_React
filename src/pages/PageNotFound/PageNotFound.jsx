import React from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Blob1 from "../../assets/blobs/blob2.png";
import Blob2 from "../../assets/blobs/blob1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./PageNotFound.css"

export default function PageNotFound() {
    return (
        <div className="pnf--div">
            <div className="pnf--background">
                <LazyLoadImage
                    src={Blob1} alt="blob"
                    className="pnf--background--blob"
                />
                <LazyLoadImage
                    src={Blob2} alt="blob"
                    className="pnf--background--blob"
                />
            </div>
            <ErrorMessage>
                <h3>Page Not Found ! 🥴</h3>
                <a href="/">Home</a>
            </ErrorMessage>
        </div>
    )
}