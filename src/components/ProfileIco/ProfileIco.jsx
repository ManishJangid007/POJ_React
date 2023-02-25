import React, { useState } from "react";
import "./ProfileIco.css";
import PersonIco from "../../assets/icons/person.png"
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";


export default function ProfileIco() {
    const navigate = useNavigate();

    const { isLoading, error, data, refetch } = useQuery('userData', () =>
        axios.get('/api/user')
            .then(res => res.data)
    );

    async function logoutUser() {
        try {
            const res = await axios.get("/api/user/logout");
            refetch();
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
                                    <h3>{data.fullName}</h3>
                                    <h4 onClick={logoutUser}>Logout</h4>
                                </>
                                :
                                <>
                                    <h3>Guest User</h3>
                                    <h4 onClick={() => navigate("/login")}>Login</h4>
                                </>
                }

            </div>
            <div className="header--profile">
                <img src={PersonIco} alt="person icon" />
            </div>
        </div>
    )
}