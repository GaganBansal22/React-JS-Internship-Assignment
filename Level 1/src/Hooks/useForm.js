import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({name: '',email: '',age: '',attendingWithGuest: 'no',guestName: '',submitted: false});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({
      ...values,[name]: value,
    });
    setIsSubmitting(false);
  };

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
  }, [errors,isSubmitting]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;