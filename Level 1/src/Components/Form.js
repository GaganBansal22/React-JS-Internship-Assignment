import React from 'react';
import useForm from '../Hooks/useForm';
import validate from '../utils/validate';

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>

      <div>
        <label>Are you attending with a guest?</label>
        <select name="attendingWithGuest" value={values.attendingWithGuest} onChange={handleChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {values.attendingWithGuest === 'yes' && (
        <div>
          <label>Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={values.guestName}
            onChange={handleChange}
          />
          {errors.guestName && <p>{errors.guestName}</p>}
        </div>
      )}

      <button type="submit">Submit</button>

      {values.submitted && (
        <div>
          <h3>Form Summary</h3>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Age: {values.age}</p>
          <p>Attending with Guest: {values.attendingWithGuest}</p>
          {values.attendingWithGuest === 'yes' && <p>Guest Name: {values.guestName}</p>}
        </div>
      )}
    </form>
  );
};

export default Form;