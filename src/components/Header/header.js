import React from 'react';
import logo from '../../logo256.png';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} alt='Logo'/>
            <h1>
                Employee Directory
            </h1>
            <p>
                Search for a specific employee or sort by Name or Phone
            </p>
        </header>
    )
};

export default Header;