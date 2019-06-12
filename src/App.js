import React, { Component } from 'react'
import fire from './config/fire';
import Home from './components/Home'
import Auth from './components/auth/auth'
import Navbar from './components/Navbar'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.user ? (<Home />) : (<Auth />)}
      </div>
    )
  }
}
