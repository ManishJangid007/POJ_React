import React, { useState } from "react";
import Background from "../../components/Background/Background";
import BackIco from "../../assets/icons/back_white.png";
import POJIco from "../../assets/icons/poj.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Loading from "../../components/Loading/Loading";

export default function Login() {
    const navigate = useNavigate();

    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(
        {
            username: "",
            password: ""
        }
    );

    function handelChange(event) {
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function handelSubmit(event) {
        event.preventDefault();
        const errors = validateData(formData);
        errors ? setError(errors) : setError([]);
        console.log(formData);
    }

    return (
        <div className="loginpage">
            <Background />
            <div className="loginpage--maincontent">
                <div className="login--blackcircle">
                    <img src={BackIco} alt="close icon" onClick={() => navigate(-1)} />
                </div>
                <div className="loginpage--loginform">
                    <img src={POJIco} alt="poj icon" />
                    <h1>Login</h1>

                    <form onSubmit={(e) => handelSubmit(e)}>

                        <div className="loginpage--fielddiv">
                            <label htmlFor="username">Username</label>
                            <div className="loginpage--inputdiv">
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    placeholder="Username / Email"
                                    onChange={(e) => handelChange(e)}
                                />
                            </div>
                        </div>

                        <div className="loginpage--fielddiv">
                            <label htmlFor="password">Password</label>
                            <div className="loginpage--inputdiv">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    placeholder="Password"
                                    onChange={(e) => handelChange(e)}
                                />
                            </div>
                        </div>

                        {
                            error.length > 0 && error.map((err, i) => <p key={i} >{err}</p>)
                        }

                        {
                            isLoading ? <Loading /> :
                                <button className="loginpage--loginbtn">Login</button>
                        }
                    </form>

                    <div className="loginpage--bottom--text">
                        <h4>Don't Have a Account ? <span onClick={() => navigate("/signup")}>Create one</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

function validateData(
    {
        username,
        password
    }
) {
    let errors = [];
    if (username.length <= 0) {
        errors.push("*Invalid username and password");
        return errors;
    }

    if (password.length <= 0) {
        errors.push("*Invalid username and password");
        return errors;
    }

    errors = false;
    return errors;
}