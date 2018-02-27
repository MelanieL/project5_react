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
        const dbref = firebase.database().ref(`jars/${this.props.jarIndex}/purchases`);

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
        const dbrefjar = firebase.database().ref(`jars/${this.props.jarIndex}/name`);
        
        dbrefjar.once('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            const newJarTotal =  data - this.state.purchaseamount;
            // Set will reset a value in Firebase
            dbrefjar.set(newJarTotal);
        });

        const purchase = {
            name: this.state.purchaseamount,
            value: this.state.purchasecat,
        };
        const dbref = firebase.database().ref(`jars/${this.props.jarIndex}/purchases`);
        dbref.push(purchase);
        this.setState({
            purchasecat: '',
            purchaseamount: ''
        });
    }

    removePurchase(key) {
        // e.preventDefault();
        const dbrefjar = firebase.database().ref(`jars/${this.props.jarIndex}/name`);
        const amountToAdd = this.state.purchases.find(el => el.key).name;
        dbrefjar.once('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            const newJarTotal = data + Number(amountToAdd);
            // Set will reset a value in Firebase
            dbrefjar.set(newJarTotal);
            firebase.database().ref(`jars/${this.props.jarIndex}/purchases`).child(key).remove();
        });
        
    }

    render() {
        return (
            <div className="mainpage__jardiv">
                <button onClick={() => this.props.remove(this.props.jarIndex)}><div className="mainpage__jardiv__deleteimgdiv"><img src="dev/images/icon_delete.png" alt="" srcset="" /></div></button>
                {/* Delete by Michiel Willemsen from the Noun Project */}
                <div className="mainpage__jardiv__imgdiv">
                    <Logo />
                </div>
                <h3 className="mainpage__jardiv__jarcat">{this.props.data.value}</h3>
                <h3 className="mainpage__jardiv__jaramount">${this.props.data.name}</h3>
                <h4>New Purchase</h4>
                {/* Removed 2nd submit */}
                <form onSubmit={this.addPurchase}>
                    <label htmlFor="purchasecat">Name</label>
                    <input type="text" id="purchasecat" value={this.state.purchasecat} onChange={this.handleChange} />

                    <label htmlFor="purchaseamount">Amount</label>
                    <input type="text" id="purchaseamount" value={this.state.purchaseamount} onChange={this.handleChange} />

                    <input className="button add_pur_button" type="submit" value="Log Purchase" />
                </form>
                <h5>Purchases:</h5>
                <ul>
                    {this.state.purchases.map((purchase) => {
                        return (
                            <Purchase data={purchase} key={purchase.key} remove={() => this.removePurchase(purchase.key)} purchaseIndex={purchase.key} />
                        )
                    })}
                </ul>
            </div>
        );
    }
};

export default Jar;



