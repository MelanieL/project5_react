import React from 'react';
import Logo from './logo';

// Simple component, no need for "this"
const Jar = (props) => {
    return (
        <div className="mainpage__jardiv">
        <div className="mainpage__jardiv__imgdiv">
            <Logo />
            <h3>{props.data.value}</h3>
            <h3>{props.data.name}</h3>
        </div>
        <button onClick={() => props.remove(props.jarIndex)}>✗</button>
        <ul>
            <li>Logged purchases:</li>
        </ul>
        </div>
    );
};

export default Jar;



