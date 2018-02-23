import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from './logo';
import Jar from './jar';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCjYetNgrYSjfnwt8_BwbTXNymm8YK8QIA",
    authDomain: "project-5-jars.firebaseapp.com",
    databaseURL: "https://project-5-jars.firebaseio.com",
    projectId: "project-5-jars",
    storageBucket: "",
    messagingSenderId: "102990948342"
  };
  firebase.initializeApp(config);

// This section is for implementing React router:
// class About extends React.Component {
//   render() {
//     return (
//       <div>
//         About Us
//       </div>
//     )
//   }
// }

// class Contact extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Contact Us</h2>
//         <Link to="/contact/michelle">Michelle</Link>
//         <Route path="/contact/michelle" component={Michelle} />
//       </div>
//     )
//   }
// }

// class Michelle extends React.Component {
//   render() {
//     return (
//       <p>Email: <a href="">...</a></p>
//     );
//   }
// }



class App extends React.Component {
    constructor () {
      super();
      this.state = {
        category: '',
        amount: '',
        purchases: []
      };
      this.addJar = this.addJar.bind(this);
      this.handleChange = this.handleChange(this);
    }

    addJar(e) {
      e.preventDefault();
      const jar = {
        name: this.state.category,
        total: this.state.amount
      };
      console.log(jar);
    }

    handleChange(e) {
      console.log('Handling the change');
      // console.log(e.target.id);
      // this.setState({
      //   [e.target.id]: e.target.value
      // });
    }

    render() {
      return (
        <Router>
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
                {/* Need to add onSubmit={} into form when needed */}
                <form action="" onSubmit={this.addJar}>
                  <label htmlFor="add_jar_cat">Category name:</label>
                  <input type="text" value="" onChange={this.handleChange} id="add_jar_cat"/>
                  <label htmlFor="cat_total">Category total:</label>
                  <input type="text" value="" onChange={this.handleChange} id="cat_total"/>
                  <input className="button add_jar_button" type="submit" value="+ Add Jar"/>
                </form>

                <h4>Log a purchase:</h4>
                <form action="">
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

            <main className="mainpage">
            {/* This is where the jar should insert each time one is created */}
            <Jar />
            </main>
            {/* For React Router */}
            {/* <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} /> */}
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
