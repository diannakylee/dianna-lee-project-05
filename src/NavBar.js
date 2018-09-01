import React from 'react';

const NavBar = () => {
    return (
        <div className="navigation">
            <a href="">
                <i class="fas fa-video"></i>
                <p>Categories</p>
            </a>
            <a href="">
                <i class="fas fa-save"></i>
                <p>Saved</p>
            </a>
        </div>
    )
}

export default NavBar;