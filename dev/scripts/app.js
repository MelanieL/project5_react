import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './logo';
import Jar from './jar';
import Purchase from './purchase';

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jarcat: '',
      jaramount: '',
      jars: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addJar = this.addJar.bind(this);
    this.removeJar = this.removeJar.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  componentDidMount() {
    const dbref = firebase.database().ref('/jars');

    dbref.on('value', (snapshot) => {
      const data = snapshot.val();
      const state = [];
      for (let key in data) {
        data[key].key = key;
        state.push(data[key]);
      }
      this.setState({
        jars: state,
      });
    });
  }

  addJar(e) {
    e.preventDefault();
    // This is making an array from whatever we pass it
    const jar = {
      name: this.state.jaramount,
      value: this.state.jarcat,
    };
    const dbref = firebase.database().ref('/jars');
    dbref.push(jar);
    this.setState({
      jarcat: '',
      jaramount: ''
    });
    
  }

  removeJar(key) {
    return firebase.database().ref('jars').child(key).remove();
  }

  render() {
    return (
      <div className="application">
        <div className="sidebar">
          <div className="sidebar__titlebox">
            <div className="sidebar__titlebox__logodiv">
              <img src="./dev/images/logo_white.png" alt="" />              
            </div>
            <h1>Jars</h1>
          </div>
          {/* This is where we will point the user name so it's customized */}
          <h2>Jane User</h2>
          <div className="sidebar__actions">
            <h4>New Jar</h4>
            <form onSubmit={this.addJar}>

              <label htmlFor="jarcat">Category</label>
              <input type="text" id="jarcat" value={this.state.jarcat} onChange={this.handleChange} />

              <label htmlFor="jaramount">Total</label>
              <input type="text" id="jaramount" value={this.state.jaramount} onChange={this.handleChange}/>

              <input className="button add_jar_button" type="submit" value="Add Jar" />
            </form>
          </div>

          <button className="button">Logout</button>
          
          <footer>
            &copy; 2018 - Melanie Phillips
          </footer>

        </div>

        <div className="mainpage">
          <div className="mainpage__titlediv">
            <h3>Your Jars</h3>
          </div>
          <div className="mainpage__jarsdiv">
              {this.state.jars.map((jar) => {
                return (
                    <Jar data={jar} key={jar.key} remove={this.removeJar} jarIndex={jar.key}/>
                )
              })}        
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))