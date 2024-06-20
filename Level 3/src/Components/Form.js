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
        <label>Survey Topic</label>
        <select className='input' name="surveyTopic" value={values.surveyTopic} onChange={handleChange}>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
      </div>

      {values.surveyTopic == "Technology" &&
        <>
          <div>
            <label>Favorite Programming Language</label>
            <select className='input' name="language" value={values.language} onChange={handleChange}>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
            </select>
          </div>
          <div>
            <label>Years of Experience</label>
            <input
              className='input'
              type="number"
              name="exp"
              value={values.exp}
              onChange={handleChange}
            />
            {errors.exp && <p>{errors.exp}</p>}
          </div>
        </>
      }

      {values.surveyTopic == "Health" &&
        <>
          <div>
            <label>Exercise Frequency</label>
            <select className='input' name="freq" value={values.freq} onChange={handleChange}>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>
          <div>
            <label>Diet Preference</label>
            <select className='input' name="diet" value={values.diet} onChange={handleChange}>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
          </div>
        </>
      }

      {values.surveyTopic == "Education" &&
        <>
          <div>
            <label>Highest Qualification</label>
            <select className='input' name="education" value={values.education} onChange={handleChange}>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <div>
            <label>Field of Study</label>
            <input 
              type='text'
              name='field'
              onChange={handleChange}
              value={values.field}
            />
          </div>
        </>
      }

      <div>
        <label>Feedback</label>
        <textarea name='feedback' rows={5} className='input' onChange={handleChange} value={values.feedback}></textarea>
        {errors.feedback && <p>{errors.feedback}</p>}
      </div>

      <button type="submit">Submit</button>

      {values.submitted && (
        <div>
          <h3>Form Summary</h3>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>survey Topic: {values.surveyTopic}</p>
          {values.language && <p>Favorite Language: {values.language}</p>}
          {values.exp && <p>:Years of Experience {values.exp}</p>}
          {values.freq && <p>Exercise Frequency: {values.freq}</p>}
          {values.diet && <p>Diet Preference: {values.diet}</p>}
          {values.education && <p>Highest Qualification: {values.education}</p>}
          {values.field && <p>Field of Study: {values.field}</p>}
          <p>Survey Topic: {values.feedback}</p>
        </div>
      )}
    </form>
  );
};

export default Form;