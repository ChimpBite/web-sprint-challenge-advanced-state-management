import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <nav className='navbar navbar-dark bg-primary'>
            <Link to='/smurfvillage' className='navbar-brand'>
              Smurf Village Database
            </Link>
          </nav>
          <main>
            <AddForm />
            <Switch>
              <Route path='/smurfvillage'>
                <SmurfDisplay />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log('AppJs', state);

  return state;
};

export default connect(mapStateToProps)(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
