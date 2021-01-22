import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../redux/actions/smurfAction';

const AddForm = props => {
  console.log('Props', props.dispatch);
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    position: '',
    description: '',
  });

  const handleChange = e => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
      [e.target.nickname]: value,
      [e.target.position]: value,
      [e.target.description]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form', formData);
    console.log('Props', props);
    props.dispatch(addSmurf());
  };

  return (
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <br />
          <input onChange={handleChange} name='name' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='nickname'>Nickname:</label>
          <br />
          <input onChange={handleChange} name='nickname' id='nickname' />
        </div>
        <div className='form-group'>
          <label htmlFor='position'>Position:</label>
          <br />
          <input onChange={handleChange} name='position' id='position' />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            name='description'
            id='description'
            rows='4'
            cols='50'
          />
        </div>

        <div
          data-testid='errorAlert'
          className='alert alert-danger'
          role='alert'
        >
          Error:{' '}
        </div>
        <button onSubmit={handleSubmit} type='submit'>
          Submit Smurf
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(AddForm);

//Task List:
//Complete
