import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs').then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className='App'>
        <nav className='navbar navbar-dark bg-primary'>
          <a className='navbar-brand'>Smurf Village Database</a>
        </nav>
        <main>
          <AddForm />
          <SmurfDisplay />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('🚀 ~ file: App.js ~ line 34 ~ state', state);

  return state;
};

export default connect(mapStateToProps)(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
