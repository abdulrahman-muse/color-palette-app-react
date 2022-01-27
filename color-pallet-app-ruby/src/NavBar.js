import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ setBackground }) {

    return (
        <nav>
            <div style={{ marginLeft: "900px", paddingTop: '25px' }} >
                <NavLink className="button-12" role="button" exact to="/">Home</NavLink>
                <NavLink className="button-12" role="button" exact to="/search">Search</NavLink>
                <NavLink className="button-12" role="button" exact to="/add">Add Shade</NavLink>
                <button onClick={() => setBackground("#071415")} className="button-12" >Reset Background</button>
            </div>
            <h2 style={{ color: "white", marginRight: "900px" }}>Tap on a Shade to see a suprise!</h2>
        </nav>
    )
}

export default NavBar;