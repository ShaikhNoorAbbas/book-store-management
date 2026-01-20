import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function Layout() {
    return (
        <>
            <div className="container mt-4">
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}