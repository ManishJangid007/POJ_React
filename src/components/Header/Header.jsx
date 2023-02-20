import React from "react";
import "./Header.css";
import PojIco from "../../assets/icons/poj.png";
import ProfileIco from "../ProfileIco/ProfileIco";

export default function Header() {
    return (
        <div className="header">
            <img src={PojIco} alt="poj icon" className="header--pojicon" />
            <h1>Plate Of Joy</h1>
            <ProfileIco />
        </div>
    )
}