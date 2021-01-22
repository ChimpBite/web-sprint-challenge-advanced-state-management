import React from 'react';
import { connect } from 'react-redux';

import './Smurfs.scss';

class Smurf extends React.Component {
  render() {
    const { smurfs } = this.props;

    return (
      <div data-testid='smurf' className='card'>
        {smurfs.map(smurf => (
          <div className='smurf-card' key={smurf.id}>
            <div className='smurf-name'>
              <h3>{smurf.name}</h3>
            </div>
            <div className='smurf-info'>
              <p>
                <b>Nickname:</b> {smurf.nickname}
              </p>
              <p>
                <b>Position:</b> {smurf.position}
              </p>
              <p>
                <b>Description:</b> {smurf.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.village;
};

export default connect(mapStateToProps)(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
