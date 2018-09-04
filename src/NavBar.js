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
                        <li>
                            <a href="#categories"><span className="smallNav"><i class="fas fa-film"></i></span><span className="largeNav"> Categories </span></a>
                        </li>
                        <li className="savedItem">
                            <a href="#saved">Saved <span className="largeNav">Films</span></a>
                            <div className="savedNumber">{props.savedFilms}</div>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default NavBar;
