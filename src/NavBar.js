import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="navigation">

            <nav>
                <ul>
                    <li>
                        {/* <Link to="/">Home</Link> */}
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Categories</a>
                        {/* <Link to="/categories"><i class="fas fa-video"></i>Categories</Link> */}
                    </li>
                    <li>
                        <a href="">Saved Films</a>
                        {/* <Link to="/saved"><i class="fas fa-save"></i>Saved</Link> */}
                    </li>
                </ul>
            </nav>

            
        </header>
    )
}

export default NavBar;
