import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

const NavBar = (props) => {
    return (
        <section className="navigation">
            <div className="wrapper">
                <nav className="navTop">
                    <div>
                        <h1></h1>
                    </div>
                    <ul className="navUL">
                        <li className="savedItem">
                            {/* <a href="#saved">Saved Films</a> */}
                            <NavLink to="#saved">Saved</NavLink>
                            <div className="savedNumber">{props.savedFilms}</div>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default NavBar;
