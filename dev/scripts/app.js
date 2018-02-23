import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from './logo';

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
    render() {
      return (
        <Router>
          <div className="application">
            <div className="sidebar">
              <div className="sidebar__titlebox">
                <div className="sidebar__titlebox__logodiv">
                  {/* Logo Credit: Jar by Deemak Daksina S from the Noun Project */}
                  <Logo />
                </div>
                <h1>Jars</h1>
              </div>
              <div className="sidebar__actions">
                <button name="button">Add Jar</button>
                <button name="button">Log a purchase</button>
                <button name="button">Logout</button>
              </div>
              <footer>
                &copy; 2018 - Melanie Phillips
              </footer>
            </div>

            <main className="mainpage">
              <div className="mainpage__jardiv">
                <div className="mainpage__jardiv__imgdiv">
                  <Logo />
                </div>
              </div>
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
