import React from "react";
import "./SearchBar.css";
import SearchIco from "../../assets/icons/search.png";
import HambergIco from "../../assets/icons/hamberg.png";
import Devices from "../../utils/Device";

export default function SearchBar(props) {
    const Device = Devices();
    return (
        <div className="searchbar">
            {!Device.isDesktop &&
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