import React, { useState } from "react";
import Background from "../../components/Background/Background";
import BackIco from "../../assets/icons/back_white.png";
import POJIco from "../../assets/icons/poj.png";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        dob: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    function handelChange(event) {
        setFormData(oldFormData => ({
            ...oldFormData,
            [event.target.name]: event.target.value
        }))
    }

    function handelSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

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

                    <form onSubmit={(e) => handelSubmit(e)}>

                        <div className="signup--inputgrid">

                            <div className="signup--fielddiv">
                                <label htmlFor="firstname">Firstname</label>
                                <div className="signup--inputdiv">
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="Enter firstname..."
                                        onChange={(e) => handelChange(e)}
                                    />
                                </div>
                            </div>

                            <div className="signup--fielddiv">
                                <label htmlFor="lastname">Lastname</label>
                                <div className="signup--inputdiv">
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Enter lastname..."
                                        onChange={(e) => handelChange(e)}
                                    />
                                </div>
                            </div>

                            <div className="signup--fielddiv">
                                <label htmlFor="gender">Gender</label>
                                <div className="signup--inputdiv">
                                    <select
                                        name="gender"
                                        onChange={(e) => handelChange(e)}
                                    >
                                        <option value="select">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="transgender">Transgender</option>
                                    </select>
                                </div>
                            </div>

                            <div className="signup--fielddiv">
                                <label htmlFor="dob">Date of Birth</label>
                                <div className="signup--inputdiv">
                                    <input
                                        type="date"
                                        name="dob"
                                        onChange={(e) => handelChange(e)}
                                    />
                                </div>
                            </div>

                            <div className="signup--fielddiv">
                                <label htmlFor="email">Email</label>
                                <div className="signup--inputdiv">
                                    <input
                                        type="Email"
                                        name="email"
                                        placeholder="Enter email..."
                                        onChange={(e) => handelChange(e)}
                                    />
                                </div>
                            </div>

                            <div className="signup--fielddiv">
                                <label htmlFor="username">Username</label>
                                <div className="signup--inputdiv">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Choose username..."
                                        onChange={(e) => handelChange(e)}
                                    />
                                </div>
                            </div>

                            <div className="signup--fielddiv">
                                <label htmlFor="password">Password</label>
                                <div className="signup--inputdiv">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Choose password..."
                                        onChange={(e) => handelChange(e)}
                                    />
                                </div>
                            </div>

                            <div className="signup--fielddiv">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="signup--inputdiv">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        onChange={(e) => handelChange(e)}
                                    />
                                </div>
                            </div>

                        </div>
                        <button className="signup--loginbtn">Sign Up</button>

                    </form>

                    <div className="signup--bottom--text">
                        <h4>Already Have a Account ? <span onClick={() => navigate("/login")}>Login</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}