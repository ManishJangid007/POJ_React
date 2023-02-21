import React from "react";
import "./ProfileIco.css";
import PersonIco from "../../assets/icons/person.png"
import { useNavigate } from "react-router-dom";


export default function ProfileIco() {
    const navigate = useNavigate();
    return (
        <div className="profileico">
            <div className="header--user">
                <h3>Username</h3>
                <h4 onClick={() => navigate("/login")}>Login</h4>
            </div>
            <div className="header--profile">
                <img src={PersonIco} alt="person icon" />
            </div>
        </div>
    )
}