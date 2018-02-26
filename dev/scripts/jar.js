import React from 'react';
// import App from './app';
import Logo from './logo';
import Purchase from './purchase';

class Jar extends React.Component {
    constructor() {
        super();
        this.state = {
            purchasecat: '',
            purchaseamount: '',
            purchases: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.addPurchase = this.addPurchase.bind(this);
        this.removePurchase = this.removePurchase.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    componentDidMount() {
        // Does this need to be jars/purchases?
        const dbref = firebase.database().ref('/purchases');

        dbref.on('value', (snapshot) => {
            const data = snapshot.val();
            const state = [];
            for (let key in data) {
                data[key].key = key;
                state.push(data[key]);
            }
            this.setState({
                purchases: state,
            });
        });
    }

    addPurchase(e) {
        e.preventDefault();
        // This is making an array from whatever we pass it
        const purchase = {
            name: this.state.purchaseamount,
            value: this.state.purchasecat,
        };
        const dbref = firebase.database().ref('/purchases');
        dbref.push(purchase);
        this.setState({
            purchasecat: '',
            purchaseamount: ''
        });
    }

    removPurchase(key) {
        console.log(key);
        return firebase.database().ref('purchases').child(key).remove();
    }

    render() {
        return (
            <div className="mainpage__jardiv">
            <div className="mainpage__jardiv__imgdiv">
                <Logo />
                <h3>{this.props.data.value}</h3>
                <h3>{this.props.data.name}</h3>
            </div>
            <button onClick={() => this.props.remove(props.purchaseIndex)}>✗</button>
            <h4>Logged purchases:</h4>
            <ul>
                <Purchase data={purchase} key={purchase.key} remove={this.removePurchase} purchaseIndex={purchase.key} />
            </ul>
            </div>
        );
    }
};

export default Jar;



