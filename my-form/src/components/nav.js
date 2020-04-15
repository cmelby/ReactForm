import React from 'react';
import "./nav.css";

const Nav = props => (
    <div className='nav'>
        <div className="new_greeting">
            <p>Welcome, {props.name}</p>
        </div>
    </div>
)
export default Nav;