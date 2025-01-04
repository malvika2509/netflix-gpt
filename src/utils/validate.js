const validate = (name, email, password, phone) => {
  const errors = {};

  // Name validation
  if (name && !/^[A-Za-z\s]{2,}$/.test(name)) {
    errors.name =
      "Name must contain only letters and spaces, and be at least 2 characters long.";
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email address.";
  }

  // Password validation
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    )
  ) {
    errors.password =
      "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
  }

  // Phone validation
  if (
    phone &&
    !/^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)
  ) {
    errors.phone = "Invalid phone number.";
  }

  return errors;
};

export default validate;
