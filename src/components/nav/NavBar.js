import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

// ¿¿PROPS?? 

// This is our "static" navbar that is identical on each "page" of this application.
export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                {/* we use a link tag instead of an anchor tag. the TO attribute is required
                and sets the route/path that the link will invoke  */}
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
        </ul>
    )
}