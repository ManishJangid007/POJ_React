import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Devices from "../../utils/Device";

export default function AboutPage() {
    const [SidebarExpanded, setSidebarExpanded] = React.useState(false);
    const Device = Devices();
    return (
        <MainLayout
            device={Device}
            sidebarExpanded={SidebarExpanded}
            setSidebarExpanded={setSidebarExpanded}
            hideFilter={true}
        >
            <h1>About Us Page</h1>
        </MainLayout>
    )
}