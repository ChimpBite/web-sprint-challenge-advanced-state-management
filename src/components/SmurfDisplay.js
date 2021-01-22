import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';

import './Smurfs.scss';

export class SmurfDisplay extends React.Component {
  render() {
    return (
      <div className='smurf-container'>
        <Smurf />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(SmurfDisplay);

//Task List:
//Complete
