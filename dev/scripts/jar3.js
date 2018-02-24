import React from 'react';
import Logo from './logo';

const Jar = (props) => {
    return (
            <div className ="mainpage__jardiv" >
                <div className="mainpage__jardiv__imgdiv">
                    <Logo />
                </div>
                <h3 className="mainpage__jardiv--category">{props.data.category}</h3>
                <h3 className="mainpage__jardiv--amount">{props.data.amount}</h3>
                <ul>
                    <li>Logged purchases</li>
                </ul>
            </div >
    );
}





export default Jar;
