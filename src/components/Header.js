import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const Header = props => (
    <header className="black mb5 pt5">
        <h1 className="ttu f3 tracked-mega anton tc mt0 mb3">Marmalade.fm</h1>
        <ul className="flex  list justify-center pl0">
            {/* exact gives us the active class on home */}
            <li className="mh2"><NavLink exact to="/" className="link nav-link biryani-black f6 ttu gray">What's Hot</NavLink></li>
            <li className="mh2"><NavLink to="/archive" className="link nav-link biryani-black f6 ttu gray">Archive</NavLink></li>
            <li className="mh2"><NavLink to="/about" className="link nav-link biryani-black f6 ttu gray">About</NavLink></li>
        </ul>
    </header>
)

export default Header