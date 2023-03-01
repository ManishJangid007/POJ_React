import React, { useState } from "react";
import SearchIco from "../../assets/icons/search.png";
import HambergIco from "../../assets/icons/hamberg.png";
import ProfileIco from "../ProfileIco/ProfileIco";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
                <LazyLoadImage
                    src={HambergIco}
                    alt="hamber ico"
                    onClick={props.expandSidebar}
                    className="searchbar--hamicon searchbar--img1"
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
                        <LazyLoadImage
                            src={SearchIco} alt="search ico"
                            className="searchbar--img2"
                        />
                    </button>
                </form>
            </div>
            <div className="searchbar--profileicon--div">
                <ProfileIco />
            </div>
        </div>
    )
}
