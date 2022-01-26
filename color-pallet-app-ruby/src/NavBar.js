import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ setBackground }) {

    return (
        <nav>
            <div style={{ marginLeft: "900px", paddingTop: '25px' }} >
                <NavLink className="button-12" role="button" exact to="/">Home</NavLink>
                {/* <NavLink className="button-12" role="button" exact to="/search">Search</NavLink> */}
                <NavLink className="button-12" role="button" exact to="/add">Add Color</NavLink>
                <button onClick={() => setBackground("#071415")} className="button-12" >Reset Background</button>
            </div>
        </nav>
    )
}

export default NavBar;