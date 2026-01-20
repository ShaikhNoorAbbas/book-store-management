import { NavLink } from "react-router-dom";
import "./nav.css"
export default function Navbar() {
    return (
        <>
            <header>
                <nav className="navContainer">
                    <div className="logo">
                        <i className="fa-solid fa-book"></i>
                    </div>
                    {/* Navlinks */}
                    <ul className="navlinks">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/add">Add</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}