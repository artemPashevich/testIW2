// Regular expression for email validation
export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  
  // Regular expression for phone validation
  export const validatePhone = (phone) => {
    const re = /^\+?[1-9]\d{1,14}$/; // Validates international phone numbers
    return re.test(String(phone));
  };
  
  // Function to check if a field is empty
  export const validateNotEmpty = (value) => {
    return value.trim() !== '';
  };