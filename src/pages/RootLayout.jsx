import { Outlet } from "react-router-dom";
import SideBarNavigation from "./SideBarNavigation";
import TopBarNavigation from "./TopBarNavigation";
export default function RootLayout() {
    return (
        <>
            <TopBarNavigation />
            <SideBarNavigation />
            <Outlet />
        </>
    );
}