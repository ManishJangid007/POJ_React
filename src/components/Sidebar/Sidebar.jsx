import React from "react";
import "./Sidebar.css";
import Item from "./Item"
import HomeIco from "../../assets/icons/home.png";
import HomeActiveIco from "../../assets/icons/home_a.png";
import FoodIcon from "../../assets/icons/food.png";
import HeartIco from "../../assets/icons/heartg.png";
import HeartActiveIco from "../../assets/icons/heartg_a.png";
import GearIco from "../../assets/icons/gear.png";
import GearActiveIco from "../../assets/icons/gear_a.png";
import AboutIco from "../../assets/icons/about.png";
import AboutActiveIco from "../../assets/icons/about_a.png";
import Blob from "../../assets/blobs/blob3.png";
import BackIco from "../../assets/icons/back.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Sidebar(props) {
    return (
        <div className={`sidebar--background ${props.expanded ? "sidebar--expanded" :
            "sidebar--collapse"
            }`}>
            <div className={`sidebar ${props.expanded ? "sidebar--expanded" :
                "sidebar--collapse"
                }`}>
                <div className="sidebar--heading">
                    <h1 className="sidebar--title">Plate of Joy</h1>
                    <LazyLoadImage
                        src={BackIco}
                        alt="back icon"
                        onClick={props.collapse}
                        className="sidebar--backicon"
                    />
                </div>
                <Item
                    active_icon={HomeActiveIco}
                    icon={HomeIco}
                    title="Home"
                    path="/"
                />
                <hr />
                <Item
                    active_icon={FoodIcon}
                    icon={FoodIcon}
                    title="Diet Planner"
                    path="/diet_planner"
                />
                <hr />
                <Item
                    active_icon={HeartActiveIco}
                    icon={HeartIco}
                    title="Favourite Recipes"
                    path="/favourite"
                />
                <hr />
                <Item
                    active_icon={GearActiveIco}
                    icon={GearIco}
                    title="Settings"
                    path="/settings"
                />
                <hr />
                <Item
                    active_icon={AboutActiveIco}
                    icon={AboutIco}
                    title="About Us"
                    path="/about_us"
                />
                <LazyLoadImage src={Blob} alt="blob" className="sidebar--blob" />
            </div>
        </div>
    )
}