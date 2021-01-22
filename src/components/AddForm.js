import React from 'react';
import { connect } from 'react-redux';
import { addSmurf, addError } from '../redux/actions/smurfAction';

class AddForm extends React.Component {
  state = {
    name: '',
    position: '',
    nickname: '',
    description: '',
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const checkName = this.props.smurfs.filter(
      smurf => smurf.name === this.state.name
    );
    if (checkName.length > 0) {
      this.setState({
        ...this.state,
      });
      this.props.setError('Must include a name');
      return;
    }

    if (this.state.name === '') {
      this.setState({
        ...this.state,
      });
      this.props.addError('Smurf name is already assigned');
    } else if (this.state.position === '') {
      this.setState({
        ...this.state,
      });
      this.props.addError('A position must be included');
    } else if (this.state.nickname === '') {
      this.setState({
        ...this.state,
      });
      this.props.addError('A nickname must be included');
    } else {
      const newSmurf = {
        id: Date.now(),
        name: this.state.name,
        position: this.state.position,
        nickname: this.state.nickname,
        description: this.state.description,
      };

      this.props.addSmurf(newSmurf);
      this.setState({
        name: '',
        position: '',
        nickname: '',
        description: '',
        error: '',
      });
    }
  };

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              name='name'
              id='name'
              value={this.state.name}
            />

            <label htmlFor='position'>Position:</label>
            <br />
            <input
              onChange={this.handleChange}
              name='position'
              id='position'
              value={this.state.position}
            />

            <label htmlFor='nickname'>Nickname:</label>
            <br />
            <input
              onChange={this.handleChange}
              name='nickname'
              id='nickname'
              value={this.state.nickname}
            />

            <label htmlFor='description'>Description:</label>
            <br />
            <textarea
              onChange={this.handleChange}
              name='description'
              id='description'
              value={this.state.description}
            />
          </div>

          <div
            data-testid='errorAlert'
            className='alert alert-danger'
            role='alert'
          >
            Error: {this.props.error}{' '}
          </div>

          <button onClick={e => this.handleSubmit(e)}>Submit Smurf</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};

const mapDispatchToProps = { addSmurf, addError };

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

//Task List:
//Complete
