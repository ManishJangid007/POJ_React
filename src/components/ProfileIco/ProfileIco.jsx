import React from "react";
import PersonIco from "../../assets/icons/person.png"
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./ProfileIco.css";


export default function ProfileIco() {
    const navigate = useNavigate();

    const { isLoading, error, data, refetch } = useQuery('userData', () =>
        axios.get('/api/user')
            .then(res => res.data),
        {
            refetchOnWindowFocus: false,
        }
    );

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
                    isLoading ?
                        <h3>Getting...</h3> :
                        error ? <h3>.|.|.</h3> :
                            data.isAuthenticated ?
                                <>
                                    <label>{data.fullName}</label>
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
                <LazyLoadImage src={PersonIco} alt="person icon" />
            </div>
        </div>
    )
}