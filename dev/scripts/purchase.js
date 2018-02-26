import React from 'react';
import Jar from './jar';

// Simple component, no need for "this"
const Purchase = (props) => {
    return (
        <div>
            <li>{props.data.value} - {props.data.name}</li>
            {/* <button onClick={() => props.remove(props.jarIndex)}>✗</button> */}
        </div>
    );
};

export default Purchase;
