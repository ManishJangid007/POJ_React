import React, { useState } from "react";
import Background from "../../components/Background/Background";
import BackIco from "../../assets/icons/back_white.png";
import POJIco from "../../assets/icons/poj.png";
import { useNavigate } from "react-router-dom";
import validateData from "./validateData";
import SignUpForm from "./SignUpForm";
import OtpForm from "./OtpForm";
import axios from "axios";
import "./SignUp.css";

export default function SignUp() {
    const navigate = useNavigate();

    const [nextStep, setNextStep] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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

    async function handelSubmit(event) {
        event.preventDefault();
        setError([]);
        const errors = validateData(formData);
        if (errors) {
            setError(errors);
        } else {
            try {
                setIsLoading(true);
                const res = await axios.post('/api/user/create', formData)
                setIsLoading(false);
                if (res.data.err) {
                    setError(res.data.errs);
                    return
                } else {
                    setNextStep(true)
                }
            } catch (e) {
                setError(["*Error : " + e.message]);
            }
        }
    }

    function handeOtpChange(event) {
        setOtp(event.target.value.trim());
    }

    async function handelOtpSubmit(event) {
        event.preventDefault();
        if (otp.length <= 0) {
            setError(["*OTP : Enter OTP"]);
            return;
        }

        try {
            setIsLoading(true);
            const res = await axios.post('/api/user/verify', {
                code: otp,
            })
            setIsLoading(false);
            if (res.data.err) setError(res.data.errs);
            else navigate("/login");
            return;
        } catch (e) {
            setError(["*OTP : " + e.message]);
            return;
        }
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
                                isLoading={isLoading}
                                navigate={navigate}
                            />
                            :
                            <OtpForm
                                handelChange={handeOtpChange}
                                handelSubmit={handelOtpSubmit}
                                error={error}
                                otp={otp}
                                email={formData.email}
                                isLoading={isLoading}
                            />
                    }
                </div>
            </div>
        </div>
    )
}
