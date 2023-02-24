import React, { useState } from "react";
import Background from "../../components/Background/Background";
import BackIco from "../../assets/icons/back_white.png";
import POJIco from "../../assets/icons/poj.png";
import { useNavigate } from "react-router-dom";
import validateData from "./validateData";
import SignUpForm from "./SignUpForm";
import OtpForm from "./OtpForm";
import "./SignUp.css";

export default function SignUp() {
    const navigate = useNavigate();

    const [nextStep, setNextStep] = useState(false);

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

    const [otp, setOtp] = useState("");
    const [error, setError] = useState([]);

    function handelChange(event) {
        setFormData(oldFormData => ({
            ...oldFormData,
            [event.target.name]: event.target.value.trim()
        }))
    }

    function handelSubmit(event) {
        event.preventDefault();
        const errors = validateData(formData);
        errors ? setError(errors) :
            setNextStep(true);
    }

    function handeOtpChange(event) {
        setOtp(event.target.value.trim());
    }

    function handelOtpSubmit(event) {
        event.preventDefault();
        setError(["*OTP : Invalid OTP"]);
        return
    }

    return (
        <div className="signupage">
            <Background />
            <div className="signupage--maincontent">
                {
                    !nextStep ?
                        <div className="signup--blackcircle">
                            <img src={BackIco} alt="close icon" onClick={() => navigate(-1)} />
                        </div>
                        :
                        <div className="signup--blackcircle--msg">
                            <h4>Do not refresh or leave this page</h4>
                        </div>
                }
                <div className="signup--form">

                    <img src={POJIco} alt="poj icon" />
                    <h1>Sign Up</h1>

                    {
                        !nextStep ?
                            <SignUpForm
                                formData={formData}
                                handelChange={handelChange}
                                handelSubmit={handelSubmit}
                                error={error}
                                navigate={navigate}
                            />
                            :
                            <OtpForm
                                handelChange={handeOtpChange}
                                handelSubmit={handelOtpSubmit}
                                error={error}
                                otp={otp}
                                email={formData.email}
                                navigate={navigate}
                            />
                    }
                </div>
            </div>
        </div>
    )
}