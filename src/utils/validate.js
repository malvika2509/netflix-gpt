const validate = (email, password, phone) => {
  const errors = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email address.";
  }

  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    )
  ) {
    errors.password =
      "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
  }

  if (
    phone &&
    !/^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)
  ) {
    errors.phone = "Invalid phone number.";
  }

  return errors;
};

export default validate;
