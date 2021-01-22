import React, { useState } from 'react';
import { addSmurf } from '../redux/actions/smurfAction';

const AddForm = props => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    position: '',
    discription: '',
  });

  const handleChange = e => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
      [e.target.nickname]: value,
      [e.target.position]: value,
      [e.target.discription]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
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

export default AddForm;

//Task List:
//Complete
