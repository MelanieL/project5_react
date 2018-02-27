import React from 'react';
import Jar from './jar';

// Simple component, no need for "this"
const Purchase = (props) => {
    return (
        <li>{props.data.value} - ${props.data.name} <button onClick={() => props.remove(props.purchaseIndex)}><div className="mainpage__jardiv__deletepurdiv"><img src="./public/images/icon_delete.png" alt="" srcset="" /></div></button></li>
    );
};

export default Purchase;
