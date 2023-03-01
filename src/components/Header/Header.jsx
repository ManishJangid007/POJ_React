import React from "react";
import PojIco from "../../assets/icons/poj.png";
import ProfileIco from "../ProfileIco/ProfileIco";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <LazyLoadImage src={PojIco} alt="poj icon" className="header--pojicon" />
            <h1>Plate Of Joy</h1>
            <ProfileIco />
        </div>
    )
}