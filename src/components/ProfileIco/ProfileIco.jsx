import React, { useState, useEffect } from "react";
import PersonIco from "../../assets/icons/person.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./ProfileIco.css";


export default function ProfileIco() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "Guest User",
        isAuthenticated: false
    });

    useEffect(() => {
        axios.get('/api/user/')
            .then(
                res => {
                    setUserData({
                        name: res.data.fullName,
                        isAuthenticated: res.data.isAuthenticated
                    })
                }
            )
    }, []);

    async function logoutUser() {
        try {
            const res = await axios.get("/api/user/logout");
            navigate(0);
            return res;
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className="profileico">
            <div className="header--user">
                {
                    userData.isAuthenticated ?
                        <>
                            <label>{userData.name}</label>
                            <button onClick={logoutUser}>Logout</button>
                        </>
                        :
                        <>
                            <label>Guest User</label>
                            <button onClick={() => navigate("/login")}>Login</button>
                        </>
                }

            </div>
            <div className="header--profile">
                <LazyLoadImage
                    src={PersonIco}
                    alt="person icon"
                    className="header--profile--person"
                />
            </div>
        </div>
    )
}