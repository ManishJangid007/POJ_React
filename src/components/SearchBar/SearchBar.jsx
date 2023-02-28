import React, { useState } from "react";
import SearchIco from "../../assets/icons/search.png";
import HambergIco from "../../assets/icons/hamberg.png";
import ProfileIco from "../ProfileIco/ProfileIco";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    function handelSubmit(event) {
        event.preventDefault();
        navigate(`/search?query=${searchQuery}`)
    }

    return (
        <div className="searchbar--upper--div">
            <div className="searchbar">
                <img
                    src={HambergIco}
                    alt="hamber ico"
                    onClick={props.expandSidebar}
                    className="searchbar--hamicon"
                />
                <div className="vl"></div>
                <form onSubmit={(e) => handelSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Search Recipes...."
                        name="searchQuery"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoComplete="off"
                    />
                    <button className="searchbar--searchbtn">
                        <img src={SearchIco} alt="search ico" />
                    </button>
                </form>
            </div>
            <div className="searchbar--profileicon--div">
                <ProfileIco />
            </div>
        </div>
    )
}
