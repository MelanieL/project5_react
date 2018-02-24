import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import Logo from './logo';
// import Jar from './jar';

  // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCjYetNgrYSjfnwt8_BwbTXNymm8YK8QIA",
//     authDomain: "project-5-jars.firebaseapp.com",
//     databaseURL: "https://project-5-jars.firebaseio.com",
//     projectId: "project-5-jars",
//     storageBucket: "",
//     messagingSenderId: "102990948342"
//   };
//   firebase.initializeApp(config);


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jarcats: ["Category"],
      jarcat: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.addJar = this.addJar.bind(this);
  }

  handleChange(e) {
    this.setState({
      jarcat: e.target.value
    });
  }

  addJar(e) {
    e.preventDefault();
    // This is making an array from whatever we pass it
    const jarState = Array.from(this.state.jarcats);
    jarState.push(this.state.jarcat);
    this.setState({
      jarcats: jarState
    });

  }

  render() {
    return (
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Jars</title>
            <link rel="stylesheet" type="text/css" href="public/styles/style.css"/>
          </Helmet>
          <div className="sidebar">
            <div className="sidebar__titlebox">
              <div className="sidebar__titlebox__logodiv">
                {/* Logo Credit: Jar by Deemak Daksina S from the Noun Project */}
                <Logo />
              </div>
              <h1>Jars</h1>
            </div>
            <div className="sidebar__actions">
              <h4>Add a jar:</h4>
              <form onSubmit={this.addJar}>

                <label htmlFor="add_jar_cat">Category name:</label>
                <input type="text" id="add_jar_cat" name="jarcat" value={this.state.jarcat} onChange={this.handleChange}/>

                <label htmlFor="cat_total">Category total:</label>
                <input type="text" id="cat_total"/>

                <button className="button add_jar_button">+ Add Jar</button>
              </form>

              <h4>Log a purchase:</h4>
              <form>
                <label htmlFor="add_pur_cat">Category:</label>
                <input type="text" value="" id="add_pur_cat" />

                <label htmlFor="pur_total">Purchase total:</label>
                <input type="text" value="" id="pur_total" />

                <input className="button add_pur_button" type="submit" value="+ Purchase" />
              </form>

              <button name="button">Logout</button>
            </div>
            <footer>
              &copy; 2018 - Melanie Phillips
            </footer>
          </div>

          <div className="mainpage">
              <div className="mainpage__jardiv">
                <div className="mainpage__jardiv__imgdiv">
                <Logo />
              {this.state.jarcats.map((jarcat, i) => {
                return <h3 key={`jarcat-${i}`} className="mainpage__jardiv--category">{jarcat}</h3>
                })}
                </div>
              <h3 className="mainpage__jardiv--amount">Amount</h3>
              <ul>
              <li>Logged purchases:</li>
              </ul>
              </div>
          </div>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
