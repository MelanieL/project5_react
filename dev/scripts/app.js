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
              {/* Logo Credit: Jar by Deemak Daksina S from the Noun Project */}
              <Logo />
            </div>
            <h1>Jars</h1>
          </div>
          <div className="sidebar__actions">
            <h4>Add a jar:</h4>
            <form onSubmit={this.addJar}>

              <label htmlFor="jarcat">Category name:</label>
              <input type="text" id="jarcat" value={this.state.jarcat} onChange={this.handleChange} />

              <label htmlFor="jaramount">Category total:</label>
              <input type="text" id="jaramount" value={this.state.jaramount} onChange={this.handleChange}/>

              <input className="button add_jar_button" type="submit" value="Add Jar" />
            </form>

            <button name="button">Logout</button>

          </div>
          <footer>
            &copy; 2018 - Melanie Phillips
            </footer>
        </div>

        <div className="mainpage">
          {/* This is where I want my jars/props to render */}
            {this.state.jars.map((jar) => {
              return (
                <div>
                  <Jar data={jar} key={jar.key} remove={this.removeJar} jarIndex={jar.key}/>
                </div>
              )
            })}

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))