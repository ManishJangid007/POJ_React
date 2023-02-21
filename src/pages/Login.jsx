import React from "react";
import Background from "../components/Background/Background";
import BackIco from "../assets/icons/back_white.png";
import POJIco from "../assets/icons/poj.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="loginpage">
            <Background />
            <div className="loginpage--maincontent">
                <div className="login--blackcircle">
                    <img src={BackIco} alt="close icon" onClick={() => navigate(-1)} />
                </div>
                <div className="loginpage--loginform">
                    <img src={POJIco} alt="poj icon" />
                    <h1>Sign in</h1>
                    <div className="loginpage--inputdiv">
                        <input type="text" placeholder="Username / Email" />
                    </div>
                    <div className="loginpage--inputdiv">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="loginpage--loginbtn">
                        <h3>Login</h3>
                    </div>
                    <div className="loginpage--bottom--text">
                        <h4>Don't Have a Account ? <span onClick={() => navigate("/signup")}>Create one</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}