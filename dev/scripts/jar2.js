import React from 'react';
import Logo from './logo';

class Jar extends React.Component {
    render() {
        return (
            <div className="mainpage__jardiv">
                <div className="mainpage__jardiv__imgdiv">
                    <Logo />
                </div>
                <h3 className="mainpage__jardiv--category">{this.category}</h3>
                <h3 className="mainpage__jardiv--amount">{this.amount}</h3>
                <ul>
                    <li>Logged purchase</li>
                </ul>
            </div>
        )
    }
}




export default Jar;
