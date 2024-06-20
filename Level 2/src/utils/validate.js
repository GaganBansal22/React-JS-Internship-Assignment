export default function validate(values) {
    let errors = {};

    if (!values.name.trim())
        errors.name = 'Name is required';

    if (!values.email)
        errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email))
        errors.email = 'Email address is invalid';

    if (!values.phone)
        errors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(values.phone))
        errors.phone = 'Phone number is invalid, must be 10 digits';

    if ((values.applyingFor === "Developer" || values.applyingFor === "Designer") && (!values.releventExp || values.releventExp <= 0))
        errors.releventExp = 'Experience must be greater than 0';

    if (values.applyingFor === "Designer") {
        if (!values.url)
            errors.url = 'URL is required';
        else if (!isValidURL(values.url))
            errors.url = 'URL is invalid';
    }

    if ((values.applyingFor === "Manager") && (!values.mngmntExp || values.mngmntExp <= 0))
        errors.mngmntExp = 'Experience must be greater than 0';

    if (values.skills.length === 0)
        errors.skills = "Select atleast 1 skill."

    if (!values.dateTime)
        errors.dateTime = 'Date and Time is required';

    return errors;
}

const isValidURL = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};