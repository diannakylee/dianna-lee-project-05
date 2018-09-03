import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <section className="navigation">
            <div className="wrapper">
                <nav className="navTop">
                    <ul className="navUL">
                        <li>
                            {/* <Link to="/">Home</Link> */}
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#categories">Categories</a>
                            {/* <Link to="/categories"><i class="fas fa-video"></i>Categories</Link> */}
                        </li>
                        <li>
                            <a href="#saved">Saved Films</a>
                            {/* <Link to="/saved"><i class="fas fa-save"></i>Saved</Link> */}
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default NavBar;
