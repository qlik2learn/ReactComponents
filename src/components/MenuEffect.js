import React from 'react';
import '../styles/MenuEffect.css'; 

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#" className="link">Mongo</a>
                </li>
                <li>
                    <a href="#" className="link">Express</a>
                </li>
                <li>
                    <a href="#" className="link">React</a>
                </li>
                <li>
                    <a href="#" className="link">NodeJS</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
