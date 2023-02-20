import React from "react";
import "./SearchBar.css";
import SearchIco from "../../assets/icons/search.png";
import HambergIco from "../../assets/icons/hamberg.png";
import ProfileIco from "../ProfileIco/ProfileIco";

export default function SearchBar(props) {
    if (props.device.isMobile) return <Bar device={props.device} expandSidebar={props.expandSidebar} />
    else return <div className="searchbar--upper--div">
        <Bar device={props.device} expandSidebar={props.expandSidebar} />
        <ProfileIco />
    </div>
}

function Bar(props) {
    return (
        <div className="searchbar">
            {!props.device.isDesktop &&
                <>
                    <img src={HambergIco} alt="hamber ico" onClick={props.expandSidebar}/>
                    <div className="vl"></div>
                </>
            }
            <input type="text" placeholder="Search Recipes...." />
            <img src={SearchIco} alt="search ico" />
        </div>
    )
}