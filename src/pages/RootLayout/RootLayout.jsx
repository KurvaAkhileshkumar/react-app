import { Outlet } from "react-router-dom";
import SideBarNavigation from "../../components/common/SideBarNavigation";
import TopBarNavigation from "../../components/common/TopBarNavigation";
export default function RootLayout() {
    return (
        <>
            <TopBarNavigation />
            <SideBarNavigation />
            <Outlet />
        </>
    );
}