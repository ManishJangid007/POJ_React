import React, { useState, useEffect } from "react";
import Background from "../../components/Background/Background";
import BackIco from "../../assets/icons/back_white.png";
import POJIco from "../../assets/icons/poj.png";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import "./Login.css";

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

    useEffect(() => {
        axios.get('/api/user')
            .then(res => {
                if (res.data.isAuthenticated) navigate("/");
            })
    }, []);

    function handelChange(event) {
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    async function handelSubmit(event) {
        event.preventDefault();
        setError([]);
        const errors = validateData(formData);
        if (errors) {
            setError(errors);
            return;
        } else {
            try {
                setIsLoading(true);
                const res = await axios.post("/api/user/login", formData);
                setIsLoading(false);
                if (res.data.err) setError(res.data.errs);
                else navigate("/");
                return;
            } catch (e) {
                setIsLoading(false);
                setError([e.message]);
                return;
            }
        }
    }

    return (
        <div className="loginpage">
            <Background />
            <div className="loginpage--maincontent">
                <div className="login--blackcircle">
                    <LazyLoadImage
                        src={BackIco}
                        alt="close icon"
                        onClick={() => navigate(-1)}
                    />
                </div>
                <div className="loginpage--loginform">
                    <LazyLoadImage src={POJIco} alt="poj icon" />
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
                        <h4>Don't Have a Account ? <span onClick={() => navigate("/signup")}>Create one</span> It's Free !</h4>
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