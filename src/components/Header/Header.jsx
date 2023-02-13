import React from "react";
import "./Header.css";
import PersonIco from "../../assets/icons/person.png"

export default function Header() {
    return (
        <div className="header">
            <h1>Plate Of Joy</h1>
            <div className="header--user">
                <h3>Username</h3>
                <h4>Logout</h4>
            </div>
            <div className="header--profile">
                <img src={PersonIco} alt="person icon" />
            </div>
        </div>
    )
}