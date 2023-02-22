import React from "react";
import Background from "../../components/Background/Background";
import BackIco from "../../assets/icons/back_white.png";
import POJIco from "../../assets/icons/poj.png";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
    const navigate = useNavigate();
    return (
        <div className="signupage">
            <Background />
            <div className="signupage--maincontent">
                <div className="signup--blackcircle">
                    <img src={BackIco} alt="close icon" onClick={() => navigate(-1)} />
                </div>
                <div className="signup--form">
                    <img src={POJIco} alt="poj icon" />
                    <h1>Sign Up</h1>
                    <div className="signup--inputgrid">
                        <div className="signup--inputdiv">
                            <input type="text" placeholder="Firstname" />
                        </div>
                        <div className="signup--inputdiv">
                            <input type="text" placeholder="Lastname" />
                        </div>
                        <div className="signup--inputdiv">
                            <input type="Email" placeholder="Email" />
                        </div>
                        <div className="signup--inputdiv">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="signup--inputdiv">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="signup--inputdiv">
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div className="signup--loginbtn">
                        <h3>Sign Up</h3>
                    </div>
                    <div className="signup--bottom--text">
                        <h4>Already Have a Account ? <span onClick={() => navigate("/login")}>Login</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}