import React from 'react';
import Logo from './logo';

const Jar = (props) => {
    return (
        <div className="mainpage__jardiv">
        <div className="mainpage__jardiv__imgdiv">
            <Logo />
            <h3>{props.data.value}</h3>
            <h3>{props.data.name}</h3>
        </div>
        <h3 className="mainpage__jardiv--amount">Amount</h3>
        <ul>
            <li>Logged purchases:</li>
        </ul>
        </div>
    );
};

export default Jar;



