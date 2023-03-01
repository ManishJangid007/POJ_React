import React from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Blob1 from "../../assets/blobs/blob2.png";
import Blob2 from "../../assets/blobs/blob1.png";
import "./PageNotFound.css"

export default function PageNotFound() {
    return (
        <div className="pnf--div">
            <div className="pnf--background">
                <img src={Blob1} alt="blob" />
                <img src={Blob2} alt="blob" />
            </div>
            <ErrorMessage>
                <h3>Page Not Found ! 🥴</h3>
                <a href="/">Home</a>
            </ErrorMessage>
        </div>
    )
}