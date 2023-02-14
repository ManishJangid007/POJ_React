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

export default function Sidebar() {
    return (
        <div className="sidebar--background">
            <div className="sidebar">
                <h1 className="sidebar--title">Plate Of Joy</h1>
                <Item 
                    active_icon={HomeActiveIco}
                    icon={HomeIco}
                    title="Home"
                    selected={true}
                />
                <hr/>
                <Item 
                    active_icon={FoodIcon}
                    icon={FoodIcon}
                    title="Diet Planner"
                    selected={false}
                />
                <hr/>
                <Item 
                    active_icon={HeartActiveIco}
                    icon={HeartIco}
                    title="Favourite Recipes"
                    selected={false}
                />
                <hr/>
                <Item 
                    active_icon={GearActiveIco}
                    icon={GearIco}
                    title="Settings"
                    selected={false}
                />
                <hr/>
                <Item 
                    active_icon={AboutActiveIco}
                    icon={AboutIco}
                    title="About Us"
                    selected={false}
                />
                <img src={Blob} alt="blob" className="sidebar--blob" />
            </div>
        </div>
    )
}