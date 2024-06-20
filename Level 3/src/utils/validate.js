export default function validate(values) {
    let errors = {};

    if (!values.name.trim())
        errors.name = 'Name is required';

    if (!values.email)
        errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email))
        errors.email = 'Email address is invalid';

    if ((values.surveyTopic === "Technology") && (!values.exp || values.exp <= 0))
        errors.exp = 'Experience must be greater than 0';

    if(values.feedback.trim().length<=50)
        errors.feedback="Feedback must be atleast 50 characters."

    return errors;
}