import React from "react";
import SearchIco from "../../assets/icons/search.png";
import HambergIco from "../../assets/icons/hamberg.png";
import ProfileIco from "../ProfileIco/ProfileIco";
import "./SearchBar.css";

export default function SearchBar(props) {
    return (
        <div className="searchbar--upper--div">
            <Bar expandSidebar={props.expandSidebar} />
            <div className="searchbar--profileicon--div">
                <ProfileIco />
            </div>
        </div>
    )
}

function Bar(props) {
    return (
        <div className="searchbar">
            <img
                src={HambergIco}
                alt="hamber ico"
                onClick={props.expandSidebar}
                className="searchbar--hamicon"
            />
            <div className="vl"></div>
            <input type="text" placeholder="Search Recipes...." />
            <img src={SearchIco} alt="search ico" />
        </div>
    )
}