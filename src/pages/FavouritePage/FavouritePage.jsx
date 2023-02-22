import React from 'react';
import DishCard from '../../components/DishCard/Dishcard';
import MainLayout from '../../layouts/MainLayout';
import Devices from '../../utils/Device';
import "../HomePage/HomePage.css";


export default function FavouritePage() {
    const [SidebarExpanded, setSidebarExpanded] = React.useState(false);
    const Device = Devices();

    return (
        <MainLayout
            device={Device}
            sidebarExpanded={SidebarExpanded}
            setSidebarExpanded={setSidebarExpanded}
            hideFilter={true}
        >
            <div className="custom--grid">
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
            </div>
        </MainLayout>
    )
}