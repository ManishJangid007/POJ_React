import React from "react";
import "./SearchBar.css";
import SearchIco from "../../assets/icons/search.png";
import HambergIco from "../../assets/icons/hamberg.png";

export default function SearchBar(props) {
    return (
        <div className="searchbar">
            <img src={HambergIco} alt="hamber ico" onClick={props.expandSidebar}/>
            <div className="vl"></div>
            <input type="text" placeholder="Search Recipes...." />
            <img src={SearchIco} alt="search ico" />
        </div>
    )
}