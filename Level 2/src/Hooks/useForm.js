import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({ name: '', dateTime: '', email: '', phone: '', skills: [], applyingFor: "Developer", releventExp: "", url: "", mngmntExp: "", submitted: false });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({
      ...values, [name]: value,
    });
    setIsSubmitting(false);
  };

  const handleDateChange = (date) => {
    setValues({
      ...values,
      dateTime: date
    });
    setIsSubmitting(false);
  };

  function handleSkillsChange(evt) {
    const { value, checked } = evt.target;
    if (checked)
      setValues((curr) => {
        curr.skills = curr.skills.filter(skill => skill != value)
        curr.skills = [...curr.skills, value]
        return ({ ...curr })
      });
    else
      setValues((curr) => {
        curr.skills = curr.skills.filter(skill => skill != value)
        return ({ ...curr })
      });
    setIsSubmitting(false);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValues({ ...values, submitted: true });
    } else {
      setValues({ ...values, submitted: false });
    }
  }, [errors, isSubmitting]);

  return { handleChange, handleSkillsChange, handleDateChange, handleSubmit, values, errors };
};

export default useForm;