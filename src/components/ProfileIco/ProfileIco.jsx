import React from "react";
import "./ProfileIco.css";
import PersonIco from "../../assets/icons/person.png"


export default function ProfileIco() {
    return (
        <div className="profileico">
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