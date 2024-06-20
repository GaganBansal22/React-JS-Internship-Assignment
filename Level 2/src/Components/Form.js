import React from 'react';
import useForm from '../Hooks/useForm';
import validate from '../utils/validate';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

const Form = () => {
  const { handleChange, handleSkillsChange, handleDateChange, handleSubmit, values, errors } = useForm(validate);
  const skills = ["JavaScript", "CSS", "Python", "HTML", "Java", "C++", "React"];
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <div>
        <label>Name</label>
        <input
          className='input'
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
          className='input'
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Phone Number</label>
        <input
        className='input'
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>

      <div>
        <label>Applying for Position</label>
        <select className='input' name="applyingFor" value={values.applyingFor} onChange={handleChange}>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      {(values.applyingFor === 'Developer' || values.applyingFor === 'Designer') && (
        <div>
          <label>Relevant Experience </label>
          <input
          className='input'
            type="number"
            name="releventExp"
            value={values.releventExp}
            onChange={handleChange}
          />
          {errors.releventExp && <p>{errors.releventExp}</p>}
        </div>
      )}

      {(values.applyingFor === 'Designer') && (
        <div>
          <label>Portfolio URL </label>
          <input
          className='input'
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />
          {errors.url && <p>{errors.url}</p>}
        </div>
      )}

      {(values.applyingFor === 'Manager') && (
        <div>
          <label>Management Experience </label>
          <input
          className='input'
            type="number"
            name="mngmntExp"
            value={values.mngmntExp}
            onChange={handleChange}
          />
          {errors.mngmntExp && <p>{errors.mngmntExp}</p>}
        </div>
      )}

      {skills.map((skill) => (
        <div key={skill}>
          <input
            type="checkbox" id={skill} value={skill}
            checked={values.skills.includes(skill)}
            onChange={handleSkillsChange}
          />
          <label className='inline' htmlFor={skill}> {skill}</label>
        </div>
      ))}
      {errors.skills && <p>{errors.skills}</p>}

      <div>
        <label>Preferred Interview Time</label>
        <Datetime
          value={values.dateTime}
          onChange={handleDateChange}
        />
        {errors.dateTime && <p>{errors.dateTime}</p>}
      </div>

      <button type="submit">Submit</button>

      {values.submitted && (
        <div>
          <h3>Form Summary</h3>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Phone number: {values.phone}</p>
          {values.releventExp && <p>Relevant Experience: {values.releventExp}</p>}
          {values.url && <p>Portfolio URL: {values.url}</p>}
          {values.mngmntExp && <p>Management Experience: {values.mngmntExp}</p>}
          <p>
            Additional Skills {values.skills.join(" ")}
          </p>
          <p>Date and Time: {values.dateTime ? values.dateTime.toString() : ''}</p>
        </div>
      )}
    </form>
  );
};

export default Form;