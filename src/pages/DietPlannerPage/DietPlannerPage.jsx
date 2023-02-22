import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Devices from "../../utils/Device";

export default function DietPlannerPage() {
    const [SidebarExpanded, setSidebarExpanded] = React.useState(false);
    const Device = Devices();
    return (
        <MainLayout
            device={Device}
            sidebarExpanded={SidebarExpanded}
            setSidebarExpanded={setSidebarExpanded}
            hideFilter={true}
        >
            <h1>Diet Planner Page</h1>
        </MainLayout>
    )
}